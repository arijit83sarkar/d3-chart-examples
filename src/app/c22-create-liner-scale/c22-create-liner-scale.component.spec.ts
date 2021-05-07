import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C22CreateLinerScaleComponent } from './c22-create-liner-scale.component';

describe('C22CreateLinerScaleComponent', () => {
  let component: C22CreateLinerScaleComponent;
  let fixture: ComponentFixture<C22CreateLinerScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C22CreateLinerScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C22CreateLinerScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
