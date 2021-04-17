import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsCenterPageComponent } from './claims-center-page.component';

describe('ClaimsCenterPageComponent', () => {
  let component: ClaimsCenterPageComponent;
  let fixture: ComponentFixture<ClaimsCenterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimsCenterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsCenterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
