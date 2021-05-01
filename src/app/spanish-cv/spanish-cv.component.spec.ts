import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanishCvComponent } from './spanish-cv.component';

describe('SpanishCvComponent', () => {
  let component: SpanishCvComponent;
  let fixture: ComponentFixture<SpanishCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpanishCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanishCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
