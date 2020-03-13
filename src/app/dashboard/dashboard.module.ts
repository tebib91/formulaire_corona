import { ChartsComponent } from './charts/charts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { MapComponent } from './map/map.component';
import { NgxEchartsModule } from 'ngx-echarts';
@NgModule({
  declarations: [DashboardComponent, ChartsComponent, MapComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    NgxEchartsModule
  ]
})
export class DashboardModule { }
