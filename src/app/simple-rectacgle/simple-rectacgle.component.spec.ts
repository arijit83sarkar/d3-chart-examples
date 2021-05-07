import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleRectacgleComponent } from './simple-rectacgle.component';

describe('SimpleRectacgleComponent', () => {
  let component: SimpleRectacgleComponent;
  let fixture: ComponentFixture<SimpleRectacgleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleRectacgleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleRectacgleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
