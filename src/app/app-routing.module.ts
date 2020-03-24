import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'formulaire', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'preprod', loadChildren: () => import('./dashboard-preprod/dashboard.module').then(m => m.DashboardModule)},
  {path: 'questions', loadChildren: () => import('./home/forms/forms.module').then(m => m.DiagModule)},
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
