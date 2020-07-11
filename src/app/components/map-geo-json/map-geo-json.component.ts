// Dependencies
import { Component, OnInit, Input } from '@angular/core';

// enviroment
import { environment } from './../../../environments/environment.prod';

// components
import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map-geo-json',
  templateUrl: './map-geo-json.component.html',
  styleUrls: ['./map-geo-json.component.css']
})
export class MapGeoJSONComponent implements OnInit {
  @Input() urlData: string;
  title = 'mapboxApp';
  map: Mapboxgl.Map;
  ngOnInit() {
    this.inicializarMap();
    this.inicializarGeoJson();
  }

  inicializarMap() {
    (Mapboxgl.accessToken as any ) = environment.mapboxKey;

    this.map = new Mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 11,
    center: [-74.104233, 4.6790821]
    });
  }

  inicializarGeoJson() {
    this.map.on('load', () => {
      this.map.addSource('datacommerces', {
        type: 'geojson',
        data: this.urlData
      });
      this.map.addLayer({
        'id': 'datacommerces',
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
      });
  }
}
