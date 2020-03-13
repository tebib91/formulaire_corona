import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsComponent} from './home/forms/forms.component';
import {AutoQuestionsComponent} from './home/forms/auto-questions/auto-questions.component';


const routes: Routes = [
  {path: '' , redirectTo:'dashboard',pathMatch: 'full'},
  { path: 'formulaire', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  {
    path: 'firstForm', component: FormsComponent
  },
  {
    path: 'secondForm', component: AutoQuestionsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
