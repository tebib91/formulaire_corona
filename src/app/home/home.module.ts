import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../material-module';

import { AgmCoreModule } from '@agm/core';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [HomeComponent, FormsComponent, AutocompleteComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyC1uIT5V4PnZ61dQVehBYBSsIB5FABY9mw',
      libraries: ['places']
    }),
    MatGoogleMapsAutocompleteModule,

  ],
  exports: [AutocompleteComponent],
  entryComponents: [AutocompleteComponent]
})
export class HomeModule { }
