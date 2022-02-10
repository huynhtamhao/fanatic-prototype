import { Component, Input, OnInit } from '@angular/core';
import { SidebarItem } from './data/sidebar-item.metadata';

@Component({
  selector: 'kairos-sidebar-main-item',
  template: `
    <div *transloco="let t" class="icon-text">
      <mat-icon>{{ mainIcon }}</mat-icon>
      <span><strong>{{ t(mainText) }}</strong></span>
    </div>
    <kairos-sidebar-item *ngFor="let menu of subMenu" [menuItem]="menu"></kairos-sidebar-item>
    <!-- <div *ngIf="subMenu.length === 0" [ngStyle]="marginBottom"></div> -->
  `,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarMainItemComponent implements OnInit {

  @Input('mainIcon') mainIcon: string = 'home';
  @Input('mainText') mainText: string = 'home';
  @Input('subMenu') subMenu: SidebarItem[] = [];
  // marginBottom: Object = {};

  ngOnInit(): void {
    // this.marginBottom = {  'margin': '28px; 0' };
  }
}
