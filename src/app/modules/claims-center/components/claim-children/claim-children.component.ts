import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IClaimChild} from '../../../../../assets/mock/claims-center.model';

@Component({
  selector: 'yl-claim-children',
  templateUrl: './claim-children.component.html',
  styleUrls: ['./claim-children.component.scss']
})
export class ClaimChildrenComponent implements OnInit {
  state: IState = null;

  constructor(private router: Router, @Inject('Window') window: Window) {
  }

  ngOnInit(): void {
    this.state = window.history.state
    console.log(window.history.state);


  }

}

interface IState {
  aHref: string
  aText: string;
  children: IClaimChild[]
  iconAlt: string;
  iconImg: string;
  id: string;
  navigationId: number
}
