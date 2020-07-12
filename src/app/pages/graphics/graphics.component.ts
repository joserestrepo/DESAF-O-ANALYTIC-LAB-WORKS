import { Component, OnInit } from '@angular/core';
// services
import { CommerceService } from 'src/app/services/commerce.service';
import { NgxSpinnerService } from 'ngx-spinner';
// class
import { Commerce } from 'src/app/class/commerce';
import { Tab } from 'src/app/class/tab';

// tools
import { Tools } from './../../tools/tools';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})
export class GraphicsComponent implements OnInit {

  listCommercesName: string[];
  listCommercesNameTop3: string[] = [];
  listCommercesSales: number[];
  listCommercesSalesTop3: number[] = [];
  listCommerce: any[];
  listTabs: Tab[];
  tools: Tools;


  constructor(private commerceService: CommerceService, private spinner: NgxSpinnerService) { 
    this.tools = new Tools();
  }

  /**
   * Se hace un llamado a las funciones para inicializar las variables con los datos de las graficas
   */
  ngOnInit() {
    this.spinner.show();
    this.initDataGraph();
    this.initTabs();
  }
  /**
   * Inicializamos las listas con los datos necesarios para las graficas
   */
  initDataGraph() {
    this.commerceService.getDataGraph()
    .subscribe((data: Commerce[])  => {

      this.listCommercesName = data.map(commerce => {
        return commerce.name;
      });
      this.listCommercesSales = data.map(commerce => {
        return Number(parseFloat(commerce.sales));
      });

      this.listCommerce = data.map(commerce => {
        return ({
          data: [Number(commerce.sales)],
          label: commerce.name
        });
      });

      this.top3Commerces();
      this.spinner.hide();
    });
  }

  /**
   * Se inicializan los tabs que se van usar en la vista
   */
  initTabs() {
    this.listTabs = [
      {
        title: 'Gráfico de torta',
        visible: true
      },
      {
        title: 'Gráfico de barra',
        visible: false
      },
      {
        title: 'Gráfico de área polar',
        visible: false
      }
    ];
  }

  /**
   * Se calcula el total de ventas de los comercios
   */
  totalSalesCommerce() {
    return this.listCommercesSales !== undefined ? this.listCommercesSales.reduce((a, b) => a + b) : 0;
  }

/**
 * Ordenamos la lista de mayor a menor venta y sacamos los 3 primeros.
 */
  top3Commerces() {
    let listSort = Object.assign([], this.listCommerce);
    listSort.sort((a, b) => {
      return (b.data[0] - a.data[0]);
    });
    listSort = listSort.splice(0 , 3);
    listSort.forEach(item => {
      this.listCommercesNameTop3.push(item.label);
      this.listCommercesSalesTop3.push(item.data[0]);
    });
  }


  /**
   * Controlador de cambios de los tabs de la vista
   */
  changeTab(index: number) {
    this.listTabs.map((tab, i) => {
      if (i === index) {
        this.listTabs[i].visible = true;
      } else {
        this.listTabs[i].visible = false;
      }
    });

  }

}
