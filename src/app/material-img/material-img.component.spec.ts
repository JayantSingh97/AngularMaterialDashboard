import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialImgComponent } from './material-img.component';

describe('MaterialImgComponent', () => {
  let component: MaterialImgComponent;
  let fixture: ComponentFixture<MaterialImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
