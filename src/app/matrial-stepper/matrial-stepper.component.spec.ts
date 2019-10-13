import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrialStepperComponent } from './matrial-stepper.component';

describe('MatrialStepperComponent', () => {
  let component: MatrialStepperComponent;
  let fixture: ComponentFixture<MatrialStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrialStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrialStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
