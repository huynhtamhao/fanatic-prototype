import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMainItemComponent } from './sidebar-main-item.component';

describe('SidebarMainItemComponent', () => {
  let component: SidebarMainItemComponent;
  let fixture: ComponentFixture<SidebarMainItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarMainItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarMainItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
