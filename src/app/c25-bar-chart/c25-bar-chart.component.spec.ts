import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C25BarChartComponent } from './c25-bar-chart.component';

describe('C25BarChartComponent', () => {
  let component: C25BarChartComponent;
  let fixture: ComponentFixture<C25BarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C25BarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C25BarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
