import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTooltipTableComponent } from './input-tooltip-table.component';

describe('InputTooltipTableComponent', () => {
  let component: InputTooltipTableComponent;
  let fixture: ComponentFixture<InputTooltipTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTooltipTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTooltipTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
