import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C42TransitionsComponent } from './c42-transitions.component';

describe('C42TransitionsComponent', () => {
  let component: C42TransitionsComponent;
  let fixture: ComponentFixture<C42TransitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C42TransitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C42TransitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
