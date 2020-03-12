import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SymptomsFormComponent} from "./form/symptoms-form/symptoms-form.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {    path: 'home', component: HomeComponent},
  {    path: 'home/symptoms', component: SymptomsFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
