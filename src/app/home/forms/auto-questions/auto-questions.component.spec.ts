import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoQuestionsComponent } from './auto-questions.component';

describe('AutoQuestionsComponent', () => {
  let component: AutoQuestionsComponent;
  let fixture: ComponentFixture<AutoQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
