import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonTelcoPartnerComponent } from './non-telco-partner.component';

describe('NonTelcoPartnerComponent', () => {
  let component: NonTelcoPartnerComponent;
  let fixture: ComponentFixture<NonTelcoPartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonTelcoPartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonTelcoPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
