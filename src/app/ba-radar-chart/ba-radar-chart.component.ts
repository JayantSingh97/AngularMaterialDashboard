import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-ba-radar-chart',
  templateUrl: './ba-radar-chart.component.html',
  styleUrls: ['./ba-radar-chart.component.css']
})
export class BaRadarChartComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Browser Install' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Mobile Install' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
