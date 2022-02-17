import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConfirmDialogComponent } from './new-confirm-dialog.component';

describe('NewConfirmDialogComponent', () => {
  let component: NewConfirmDialogComponent;
  let fixture: ComponentFixture<NewConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewConfirmDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
