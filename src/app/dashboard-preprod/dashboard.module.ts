import { ChartsComponent } from './charts/charts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { MapComponent } from './map/map.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { GoogleMapComponent } from './google-map/google-map.component';
import { AgmCoreModule } from '@agm/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import { HelpComponent } from './help/help.component';
@NgModule({
  declarations: [DashboardComponent, ChartsComponent, MapComponent, GoogleMapComponent, LeafletMapComponent, HelpComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ChartsModule,
        NgxEchartsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyC1uIT5V4PnZ61dQVehBYBSsIB5FABY9mw',
            libraries: ['places']
        }),
        MatButtonModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        MatSelectModule,
        MatPaginatorModule,
        MatIconModule
    ],
  entryComponents: [HelpComponent]
})
export class DashboardModule { }
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
