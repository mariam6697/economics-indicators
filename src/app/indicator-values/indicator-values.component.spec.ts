import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { IndicatorValuesComponent } from './indicator-values.component';

describe('IndicatorValuesComponent', () => {
  let component: IndicatorValuesComponent;
  let fixture: ComponentFixture<IndicatorValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CommonModule,
        FormsModule,
        NgbPaginationModule,
      ],
      declarations: [IndicatorValuesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IndicatorValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
