import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularChartsComponent } from './angular-charts.component';

describe('AngularChartsComponent', () => {
  let component: AngularChartsComponent;
  let fixture: ComponentFixture<AngularChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
