import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsucessComponent } from './dialogsucess.component';

describe('DialogsucessComponent', () => {
  let component: DialogsucessComponent;
  let fixture: ComponentFixture<DialogsucessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogsucessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogsucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
