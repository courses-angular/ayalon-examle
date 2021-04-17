import { Component, OnInit } from '@angular/core';
import {claimsCenter, ClaimsCenterModel} from '../../../../../assets/mock/claims-center.model';

@Component({
  selector: 'yl-claims-center-page',
  templateUrl: './claims-center-page.component.html',
  styleUrls: ['./claims-center-page.component.scss']
})
export class ClaimsCenterPageComponent implements OnInit {
  claimsCenter: ClaimsCenterModel;
  constructor() { }

  ngOnInit(): void {
    this.claimsCenter = claimsCenter;
  }

}
