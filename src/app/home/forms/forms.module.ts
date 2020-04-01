import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsRoutingModule} from './forms-routing.module';
import {ListingComponent} from './listing/listing.component';
import {FormComponent} from './diagnostic/forms.component';
import {AutoQuestionsComponent} from './auto-questions/auto-questions.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {DetailListDialogComponent} from './detail-list-dialog/detail-list-dialog.component';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [ListingComponent, FormComponent, AutoQuestionsComponent, DetailListDialogComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatIconModule,
    MatPaginatorModule
  ],
  entryComponents: [DetailListDialogComponent]
})
export class DiagModule {
}
