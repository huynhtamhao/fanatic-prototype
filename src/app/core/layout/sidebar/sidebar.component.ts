import { Component, OnInit } from '@angular/core';
import { ADMIN_MENU } from './data/admin.menu';
import { HOME_MENU } from './data/home.menu';
import { MASTER_MENU } from './data/master.menu';
import { SidebarItem } from './data/sidebar-item.metadata';


@Component({
  selector: 'kairos-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  homeMenu: SidebarItem[] = [];
  masterMenu: SidebarItem[] = [];
  adminMenu: SidebarItem[] = [];

  ngOnInit(): void {
    this.homeMenu = HOME_MENU;
    this.masterMenu = MASTER_MENU;
    this.adminMenu = ADMIN_MENU;
  }
}
