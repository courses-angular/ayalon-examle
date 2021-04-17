import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClaimsCenterPageComponent} from './pages/claims-center-page/claims-center-page.component';
import {ClaimChildrenComponent} from './components/claim-children/claim-children.component';

const routes: Routes = [
  {
    path: '',
    component: ClaimsCenterPageComponent,

  },
  {
    path: 'bituah_briyut',
    component: ClaimChildrenComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: 'Window',
      useValue: window
    }
  ]
})
export class ClaimsCenterRoutingModule {
}
