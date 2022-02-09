import { Component, Input, OnInit } from '@angular/core';
import { SidebarItem } from '../sidebar-item.metadata';

@Component({
  selector: 'kairos-sidebar-main-item',
  templateUrl: './sidebar-main-item.component.html',
  styleUrls: ['./sidebar-main-item.component.scss']
})
export class SidebarMainItemComponent implements OnInit {

  @Input('mainIcon') mainIcon: string = 'home';
  @Input('mainText') mainText: string = 'home';
  @Input('subMenu') subMenu: SidebarItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
