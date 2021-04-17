import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimChildrenComponent } from './claim-children.component';

describe('ClaimChildrenComponent', () => {
  let component: ClaimChildrenComponent;
  let fixture: ComponentFixture<ClaimChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimChildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
