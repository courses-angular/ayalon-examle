import {Component, Input, OnInit} from '@angular/core';
import {IClaim} from '../../../../../assets/mock/claims-center.model';
import {Router} from '@angular/router';

@Component({
  selector: 'yl-claims-items',
  templateUrl: './claims-items.component.html',
  styleUrls: ['./claims-items.component.scss']
})
export class ClaimsItemsComponent implements OnInit {
  @Input('claims') claimItemProps: IClaim[];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onClaim(claim: IClaim) {
    console.log(claim)
    // this.router.navigateByUrl('/'+ claim.aHref)

  }
}
