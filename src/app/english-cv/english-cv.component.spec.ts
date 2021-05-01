import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishCvComponent } from './english-cv.component';

describe('EnglishCvComponent', () => {
  let component: EnglishCvComponent;
  let fixture: ComponentFixture<EnglishCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
