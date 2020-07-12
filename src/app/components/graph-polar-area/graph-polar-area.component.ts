import { Component, OnInit, Input } from '@angular/core';

import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-graph-polar-area',
  templateUrl: './graph-polar-area.component.html',
  styleUrls: ['./graph-polar-area.component.css']
})
export class GraphPolarAreaComponent implements OnInit {
  /**
   * Recibimos el listado de nombres de los comercios que sera nuestro label y la cantidad de venta de cada comercio
   * para mostrarlo en la grafica
   */
  @Input() nameCommerces: string[];
  @Input() saleCommerces: number[];

  /**
   * Configuracion necesario para mostrar la grafica
   */
  public polarAreaLegend = true;
  public polarAreaChartType: ChartType = 'polarArea';

  constructor() { }

  ngOnInit() {
  }

}
