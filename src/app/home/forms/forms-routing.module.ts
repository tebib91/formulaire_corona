import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AutoQuestionsComponent} from './auto-questions/auto-questions.component';
import {FormComponent} from './diagnostic/forms.component';
import {ListingComponent} from './listing/listing.component';


const routes: Routes = [
  {path: 'diagnostic', component: FormComponent},
  {path: 'declaration', component: AutoQuestionsComponent},
  {path: 'listing', component: ListingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
