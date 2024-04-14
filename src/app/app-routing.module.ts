import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./fornt-end/fornt-end-routing.module').then(m => m.ForntEndRoutingModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin-routing.module').then(m => m.AppRoutingModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
