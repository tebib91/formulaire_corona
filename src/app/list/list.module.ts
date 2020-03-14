import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { DemoMaterialModule } from '../material-module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    DemoMaterialModule,
    HttpClientModule
  ]
})
export class ListModule { }
