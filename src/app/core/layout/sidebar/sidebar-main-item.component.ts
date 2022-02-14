import { Component, Input } from '@angular/core';
import { SidebarItem } from './data/sidebar-item.metadata';

@Component({
  selector: 'kairos-sidebar-main-item',
  template: `
    <div class="icon-text">
      <mat-icon>{{ mainIcon }}</mat-icon>
      <span><strong>{{ mainText | transloco }}</strong></span>
    </div>
    <kairos-sidebar-item *ngFor="let menu of subMenu" [menuItem]="menu"></kairos-sidebar-item>
    <!-- <div *ngIf="subMenu.length === 0" [ngStyle]="marginBottom"></div> -->
  `,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarMainItemComponent {

  @Input() mainIcon!: string;
  @Input() mainText!: string;
  @Input() subMenu: SidebarItem[] = [];
  // marginBottom: Object = {};

  // ngOnInit(): void {
  //   this.marginBottom = {  'margin': '28px; 0' };
  // }
}
