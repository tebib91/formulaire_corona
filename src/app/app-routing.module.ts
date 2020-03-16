import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsComponent} from './home/forms/forms.component';
import {AutoQuestionsComponent} from './home/forms/auto-questions/auto-questions.component';


const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'formulaire', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'preprod', loadChildren: () => import('./dashboard-preprod/dashboard.module').then(m => m.DashboardModule)},
  {
    path: 'diagnostic', component: FormsComponent
  },
  {
    path: 'declaration', component: AutoQuestionsComponent
  },
  {path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule)},
  { path: 'back-office', loadChildren: () => import('./back-office/back-office.module').then(m => m.BackOfficeModule) },
  { path: 'front', loadChildren: () => import('./front/dashboard.module').then(m => m.DashboardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
