import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaRadarChartComponent } from './ba-radar-chart.component';

describe('BaRadarChartComponent', () => {
  let component: BaRadarChartComponent;
  let fixture: ComponentFixture<BaRadarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaRadarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaRadarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
