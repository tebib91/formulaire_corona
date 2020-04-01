import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailListDialogComponent } from './detail-list-dialog.component';

describe('DetailListDialogComponent', () => {
  let component: DetailListDialogComponent;
  let fixture: ComponentFixture<DetailListDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailListDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
