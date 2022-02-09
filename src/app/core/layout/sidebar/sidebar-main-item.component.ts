import { Component, Input } from '@angular/core';
import { SidebarItem } from './data/sidebar-item.metadata';

@Component({
  selector: 'kairos-sidebar-main-item',
  template: `
    <button mat-list-item>
      <mat-icon>{{ mainIcon }}</mat-icon> {{ mainText }}
    </button>
    <div class="collapse" id="collapseExample">
      <kairos-sidebar-item *ngFor="let menuitem of subMenu" [menuitem]="menuitem"></kairos-sidebar-item>
    </div>
  `,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarMainItemComponent {

  @Input('mainIcon') mainIcon: string = 'home';
  @Input('mainText') mainText: string = 'home';
  @Input('subMenu') subMenu: SidebarItem[] = [];

  constructor() { }
}
