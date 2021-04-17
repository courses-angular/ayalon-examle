import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaimsCenterRoutingModule } from './claims-center-routing.module';
import { ClaimsCenterPageComponent } from './pages/claims-center-page/claims-center-page.component';
import { ClaimsItemsComponent } from './components/claims-items/claims-items.component';
import { ClaimChildrenComponent } from './components/claim-children/claim-children.component';


@NgModule({
  declarations: [ClaimsCenterPageComponent, ClaimsItemsComponent, ClaimChildrenComponent],
  imports: [
    CommonModule,
    ClaimsCenterRoutingModule
  ]
})
export class ClaimsCenterModule { }
