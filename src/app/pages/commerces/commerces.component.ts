
import { Component, OnInit } from '@angular/core';
// services
import { CommerceService } from 'src/app/services/commerce.service';

//class
import { PropertiesCommerce } from './../../class/properties-commerce';

@Component({
  selector: 'app-commerces',
  templateUrl: './commerces.component.html',
  styleUrls: ['./commerces.component.css']
})
export class CommercesComponent implements OnInit {

  listCommerces: PropertiesCommerce[] = [];
  fullListCommerces: PropertiesCommerce[];


  constructor( private commerceService: CommerceService) { }

  ngOnInit() {
    this.initiListCommerces();
  }

/**
 * utilizamos el servicio de comercio para traer los datos a mostrar en la vista.
 */
  initiListCommerces() {
    this.commerceService.getDataCommerces()
    .subscribe((data: PropertiesCommerce[]) => {
      this.listCommerces = Object.assign([], data);
      this.fullListCommerces = Object.assign([], data);

    });
  }

  /**
   * Realizamos una busqueda con la cadena de texto ingresada por el usuario y verificamos que coincida con algun comercio.
   * Recibimos como parametro la variable e la cual representa el evento de tecleo.
   * @param e 
   */
  buscador(e: any) {
    if (e.target.value === '') {
      this.listCommerces = this.fullListCommerces;
      return;
    }
    this.listCommerces = [];
    this.listCommerces = this.fullListCommerces.filter( commerce => {
      if(commerce.name.toLocaleLowerCase().includes((e.target.value as string).toLocaleLowerCase())) {
        return commerce;
      }
    });
  }

}
