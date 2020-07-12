import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graph-bar',
  templateUrl: './graph-bar.component.html',
  styleUrls: ['./graph-bar.component.css']
})
export class GraphBarComponent implements OnInit {
  /**
   * Recibimos una lista de objeto el cual cuenta con la siguiente estructura
   * {
   *  data: number,
   *  label: string
   * }
   * son los datos que utilizamos para mostrar el grafico
   */
  @Input() listCommerce: any[];

  /**
   * Configuracion necesario para mostrar la grafica
   */
  public barChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',
    },
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Comercios'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  constructor() { }

  ngOnInit() {
  }

}
