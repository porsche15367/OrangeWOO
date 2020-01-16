import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreProductionDataComponent } from './pre-production-data.component';

describe('PreProductionDataComponent', () => {
  let component: PreProductionDataComponent;
  let fixture: ComponentFixture<PreProductionDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreProductionDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreProductionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
