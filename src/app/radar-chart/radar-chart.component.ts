import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {

  public radarChartOptions: ChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['India', 'USA', 'UK', 'Russia', 'China', 'Singapore', 'Europe'];

  public radarChartData: ChartDataSets[] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Browser Impression ' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Mobile Impression ' }
  ];
  public radarChartType: ChartType = 'radar';

  constructor() { }

  ngOnInit() {
  }

}
