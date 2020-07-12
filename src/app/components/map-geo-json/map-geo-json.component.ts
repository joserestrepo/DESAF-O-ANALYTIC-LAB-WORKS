// Dependencies
import { Component, OnInit, Input } from '@angular/core';

// enviroment
import { environment } from './../../../environments/environment.prod';

// components
import * as Mapboxgl from 'mapbox-gl';
import { PropertiesCommerce } from 'src/app/class/properties-commerce';

@Component({
  selector: 'app-map-geo-json',
  templateUrl: './map-geo-json.component.html',
  styleUrls: ['./map-geo-json.component.css']
})
export class MapGeoJSONComponent implements OnInit {
  @Input() urlData: string;
  map: Mapboxgl.Map;


  ngOnInit() {
    this.inicializarMap();
    this.inicializarGeoJson();
  }

  /**
   * Montamos el mapa dandole las configuraciones principales
   */
  inicializarMap() {
    (Mapboxgl.accessToken as any ) = environment.mapboxKey;

    this.map = new Mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 11,
    center: [-74.104233, 4.6790821]
    });
  }

  /**
   * Cargamos los datos GeoJSON al mapa y configuramos para cuando le den click al punto se muestre un modal con la informacion del comercio
   */
  inicializarGeoJson() {
    this.map.on('load', () => {
      this.map.addSource('datacommerces', {
        type: 'geojson',
        data: this.urlData
      });
      this.map.addLayer({
          'id': 'datacommerces-layer',
          'type': 'circle',
          'source': 'datacommerces',
          'layout': {
          'visibility': 'visible'
          },
          'paint': {
          'circle-radius': 8,
          'circle-color': 'rgba(55,148,179,1)'
          },
      });

      this.map.on('click', 'datacommerces-layer', (e) => {
        new Mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(e.features[0].properties.name !== undefined ? this.templatePopUpLayer((e.features[0].properties as PropertiesCommerce )) : 'Sin datos')
        .addTo(this.map);
        });

        // Change the cursor to a pointer when the mouse is over the states layer.
        this.map.on('mouseenter', 'datacommerces-layer', () => {
          this.map.getCanvas().style.cursor = 'pointer';
        });
          
        // Change it back to a pointer when it leaves.
        this.map.on('mouseleave', 'datacommerces-layer', () => {
          this.map.getCanvas().style.cursor = '';
        });
    });
  }

  /**
   * Template para mostrar la informacion de los puntos del mapa
   */
  templatePopUpLayer(commerce: PropertiesCommerce) {
    return(`
      <div class="card-body">
        <h5 class="card-title">${commerce.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${commerce.owner}</h6>
        <hr/>
        <p class="card-text">Horario: ${commerce.days} <br/> ${commerce.schedule}</p>
        <p class="card-text">Direccion: ${commerce.address}</p>
        <p class="card-text">Telefono: ${commerce.phone}</p>
      </div>
    `)
  }
}
