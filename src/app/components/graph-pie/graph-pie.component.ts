import { Component, OnInit, Input } from '@angular/core';
import { ChartType, ChartOptions, PositionType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-graph-pie',
  templateUrl: './graph-pie.component.html',
  styleUrls: ['./graph-pie.component.css']
})
export class GraphPieComponent implements OnInit {
  /**
   * Recibimos el listado de nombres de los comercios que sera nuestro label y la cantidad de venta de cada comercio
   * para mostrarlo en la grafica
   */
  @Input() nameCommerces: string[];
  @Input() saleCommerces: number[];


  /**
   * Configuracion necesario para mostrar la grafica
   */
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'right',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          let total = 0;
          this.saleCommerces.forEach( item => total += item );
          return `${((value / total) * 100).toFixed(2)}%`;
        },
      },
    }
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [pluginDataLabels];
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)','rgba(256,150,0,0.3)', 'rgba(150,256,0,0.3)', 'rgba(0,150,255,0.3)', 'rgba(150,150,255,0.3)'],
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
