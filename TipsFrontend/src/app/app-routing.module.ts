import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TipperOverviewComponent} from "./tipper/tipper-overview/tipper-overview.component";

const routes: Routes = [
  { path: 'tipper' , component: TipperOverviewComponent},
  { path: 'admin' , loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
