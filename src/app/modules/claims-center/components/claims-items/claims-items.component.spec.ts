import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsItemsComponent } from './claims-items.component';

describe('ClaimsItemsComponent', () => {
  let component: ClaimsItemsComponent;
  let fixture: ComponentFixture<ClaimsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimsItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
