import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C23BrandScalesComponent } from './c23-brand-scales.component';

describe('C23BrandScalesComponent', () => {
  let component: C23BrandScalesComponent;
  let fixture: ComponentFixture<C23BrandScalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C23BrandScalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C23BrandScalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
