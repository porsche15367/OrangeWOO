import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationFiltersComponent } from './configuration-filters.component';

describe('ConfigurationFiltersComponent', () => {
  let component: ConfigurationFiltersComponent;
  let fixture: ComponentFixture<ConfigurationFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
