import { Component, OnInit } from '@angular/core';
// services
import { CommerceService } from 'src/app/services/commerce.service';
import { NgxSpinnerService } from 'ngx-spinner';
// class
import { Commerce } from 'src/app/class/commerce';
import { Tab } from 'src/app/class/tab';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})
export class GraphicsComponent implements OnInit {

  listCommercesName: string[];
  listCommercesSales: number[];
  listCommerce: Object[];
  listTabs: Tab[];


  constructor(private commerceService: CommerceService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.initDataGraph();
    this.initTabs();
  }

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
      this.spinner.hide();
    });
  }

  initTabs() {
    this.listTabs = [
      {
        title: 'Grafico de torta',
        visible: true
      },
      {
        title: 'Grafico de barra',
        visible: false
      },
      {
        title: 'Grafico de área polar',
        visible: false
      }
    ];
  }

  totalSalesCommerce() {
    return this.listCommercesSales !== undefined ? this.listCommercesSales.reduce((a, b) => a + b) : 0;
  }

  format_number(x: string) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

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
