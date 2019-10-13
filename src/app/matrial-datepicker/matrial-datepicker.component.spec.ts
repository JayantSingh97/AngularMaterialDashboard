import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrialDatepickerComponent } from './matrial-datepicker.component';

describe('MatrialDatepickerComponent', () => {
  let component: MatrialDatepickerComponent;
  let fixture: ComponentFixture<MatrialDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrialDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrialDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
