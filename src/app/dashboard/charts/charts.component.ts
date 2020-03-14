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
  @Input() legend: boolean;
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
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0.4,
        fill: false,
        spanGaps: true,
        bezierCurve: true
      }
    },
    tooltips: {
      intersect: false,
      mode: 'x',
      axis: 'x'
    },
    scales: {
      xAxes: [
        {
          // stacked: true,
          // interval: 1,
          gridLines: {
            display: false
          },
          offset: true,
          ticks: {
            maxRotation: 0,
            autoSkip: true,
            maxTicksLimit: 4,
          },
          type: 'category',
          unit: 'day',
          time: {
            displayFormats: {
              month: 'MMM',
              day: 'DD/MM',
              hour: 'DD/MM'
            }
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: true
          },
          type: 'linear',
          ticks: {
            autoSkip: true,
            maxTicksLimit: 5,
          }
        }
      ]
    }
  };
  public barChartOptions = {
    legend: {
      display: false
    },
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    },
    maintainAspectRatio: false,
  };
  public pieChartOptions = {
    responsive: true,
    legend: {
      display: false
    },
    elements: {
      line: {
        tension: 0,
        fill: false, // disables bezier curves
        spanGaps: true
      }
    },
    maintainAspectRatio: false,
  };
  colors: any;
  public lineColors: Color[] = [
    {
      backgroundColor: '#6342D2',
      borderColor: '#6342D2',
      pointBackgroundColor: '#6342D2',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {
      backgroundColor: '#59D5FD',
      borderColor: '#59D5FD',
      pointBackgroundColor: '#59D5FD',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#59D5FD'
    },
    {
      backgroundColor: '#FB6B80',
      borderColor: '#FB6B80',
      pointBackgroundColor: '#FB6B80',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#FB6B80'
    }
  ];
  public pieChartColors = [
    {
      backgroundColor: ['#6342D2', '#59D5FD', '#FB6B80'],
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
    if (this.legend) {
      this.options.legend = {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true
        }
      };
    }
    // getting data for the chart
    // this.apiService.get(this.dataSource).subscribe(
    //   (data) => {
    //     // format data here
    //   }
    // )
  }

}
