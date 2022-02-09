import { Component, Input } from '@angular/core';
import { SidebarItem } from './data/sidebar-item.metadata';

@Component({
  selector: 'kairos-sidebar-main-item',
  template: `
    <div class="icon-text">
      <mat-icon>{{ mainIcon }}</mat-icon>
      <span><strong>{{ mainText }}</strong></span>
    </div>
    <!-- <mat-toolbar>
      <button mat-icon-button>
        <mat-icon>{{ mainIcon }}</mat-icon>
      </button>
      <span><strong>{{ mainText }}</strong></span>
    </mat-toolbar> -->
    <!-- <mat-list-item>
      <mat-icon>{{ mainIcon }}</mat-icon> <strong>{{ mainText }}</strong>
    </mat-list-item> -->
    <kairos-sidebar-item *ngFor="let menu of subMenu" [menuItem]="menu"></kairos-sidebar-item>
  `,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarMainItemComponent {

  @Input('mainIcon') mainIcon: string = 'home';
  @Input('mainText') mainText: string = 'home';
  @Input('subMenu') subMenu: SidebarItem[] = [];
}
