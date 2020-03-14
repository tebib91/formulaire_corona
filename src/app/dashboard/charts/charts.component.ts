import { ApiserviceService } from './../../apiservice.service';
import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  @Input() chartType: string;
  @Input() data: any;
  @Input() dataSource: string;
  options: any;
  public lineChartData: any = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Cas confirmés' },
    { data: [28, 2, 10, 5, 6, 8, 10], label: 'Débraillé' },
    { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Symptômes signalés' }
  ];
  dataPie: any;
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartLegend = true;
  public lineChartOptions = {
    responsive: true,
    elements: {
      line: {
        tension: 0.4,
        fill: false,
        spanGaps: true,
        bezierCurve: true
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
      ]
    }
  };
  public barChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public pieChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        // formatter: (value, ctx) => {
        //   // const label = ctx.chart.data.labels[ctx.dataIndex];
        //   return label;
        // },
      },
    }
  };
  colors: any;
  public lineColors: Color[] = [
    { // grey
      backgroundColor: '#6342D2',
      borderColor: '#8c6bfa',
      pointBackgroundColor: '#8c6bfa',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: '#59D5FD',
      borderColor: '#89defa',
      pointBackgroundColor: '#89defa',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#59D5FD'
    },
    { // red
      backgroundColor: '#FB6B80',
      borderColor: '#fca4b1',
      pointBackgroundColor: '#fca4b1',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#fca4b1'
    }
  ];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];
  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Masculin' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Féminin' }
  ];
  constructor(private apiService: ApiserviceService) { }

  ngOnInit() {
    switch (this.chartType) {
      case 'line':
        this.options = this.lineChartOptions;
        this.colors = this.lineColors;
        break;
      case 'bar':
        this.options = this.barChartOptions;
        this.colors = this.lineColors;
        this.lineChartData = this.barChartData;
        break;
      case 'pie':
        this.options = this.pieChartOptions;
        this.colors = this.pieChartColors;
        this.lineChartLabels = ['Masculin', 'Féminin'];
        this.data = [300, 500];
        break;
      default:
        console.log('no options for this');
        break;
    }
    // getting data for the chart
    // this.apiService.get(this.dataSource).subscribe(
    //   (data) => {
    //     // format data here
    //   }
    // )
  }

}
