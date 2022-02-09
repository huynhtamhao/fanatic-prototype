import { Component, OnInit } from '@angular/core';
import { HOME_MENU } from './home.menu';
import { SidebarItem } from './sidebar-item.metadata';


@Component({
  selector: 'kairos-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  homeMenu: SidebarItem[] = [];

  ngOnInit(): void {
    this.homeMenu = HOME_MENU;
  }

}
