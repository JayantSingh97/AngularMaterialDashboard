import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularbuttonComponent } from './angularbutton.component';

describe('AngularbuttonComponent', () => {
  let component: AngularbuttonComponent;
  let fixture: ComponentFixture<AngularbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
