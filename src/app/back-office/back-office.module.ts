import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackOfficeComponent } from './back-office.component';
import { DemoMaterialModule } from '../material-module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BackOfficeComponent],
  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BackOfficeModule { }
