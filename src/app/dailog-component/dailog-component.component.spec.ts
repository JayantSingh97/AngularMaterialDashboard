import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailogComponentComponent } from './dailog-component.component';

describe('DailogComponentComponent', () => {
  let component: DailogComponentComponent;
  let fixture: ComponentFixture<DailogComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailogComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
