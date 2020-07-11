import { Component, OnInit, Input } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-graph-pie',
  templateUrl: './graph-pie.component.html',
  styleUrls: ['./graph-pie.component.css']
})
export class GraphPieComponent implements OnInit {
  @Input() nameCommerces: string[];
  @Input() saleCommerces: number[];

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
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
