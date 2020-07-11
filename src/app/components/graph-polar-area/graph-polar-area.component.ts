import { Component, OnInit, Input } from '@angular/core';

import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-graph-polar-area',
  templateUrl: './graph-polar-area.component.html',
  styleUrls: ['./graph-polar-area.component.css']
})
export class GraphPolarAreaComponent implements OnInit {
  @Input() nameCommerces: string[];
  @Input() saleCommerces: number[];

  public polarAreaLegend = true;
  public polarAreaChartType: ChartType = 'polarArea';

  constructor() { }

  ngOnInit() {
  }

}
