import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/claims-center',
    pathMatch: 'full'
  },
  {
    path: 'claims-center',
    loadChildren: ()=> import('./modules/claims-center/claims-center.module').then(m=>m.ClaimsCenterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
