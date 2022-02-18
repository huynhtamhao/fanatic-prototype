import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { Constants } from '../../constants/Constants';
import { ADMIN_MENU } from './data/admin.menu';
import { HOME_MENU } from './data/home.menu';
import { MASTER_MENU } from './data/master.menu';
import { SidebarItem } from './data/sidebar-item.metadata';


@Component({
  selector: 'kairos-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  homeMenu: SidebarItem[] = [];
  masterMenu: SidebarItem[] = [];
  adminMenu: SidebarItem[] = [];

  private subscription = new Subscription();
  private currentDate = new Date();
  public dateTimeJP = this.convertDateTimeZone(this.currentDate, Constants.localeJP, Constants.timezoneJP).getTime();

  ngOnInit(): void {
    this.homeMenu = HOME_MENU;
    this.masterMenu = MASTER_MENU;
    this.adminMenu = ADMIN_MENU;

    // time annotation
    this.subscription = timer(0, 1000)
      .subscribe(() => {
        this.dateTimeJP = this.dateTimeJP + 1000;
      });
  }

  convertDateTimeZone(date: Date, locale: string, timeZone: string) {
    return new Date(date.toLocaleString(locale, { timeZone: timeZone }));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
