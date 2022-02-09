import { Component, Input } from '@angular/core';
import { SidebarItem } from './data/sidebar-item.metadata';

@Component({
  selector: 'kairos-sidebar-main-item',
  template: `
    <div class="header">
      <mat-icon>{{ mainIcon }}</mat-icon> -- {{ mainText }}
    </div>
    <kairos-sidebar-item *ngFor="let menuitem of subMenu" [menuitem]="menuitem"></kairos-sidebar-item>
  `,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarMainItemComponent {

  @Input('mainIcon') mainIcon: string = 'home';
  @Input('mainText') mainText: string = 'home';
  @Input('subMenu') subMenu: SidebarItem[] = [];
}
