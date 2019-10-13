import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

import { MatrailTableComponent } from './matrail-table.component';

describe('MatrailTableComponent', () => {
  let component: MatrailTableComponent;
  let fixture: ComponentFixture<MatrailTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrailTableComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrailTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
