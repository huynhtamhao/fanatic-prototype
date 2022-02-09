import { Component, OnInit } from '@angular/core';
import { map, share, Subscription, timer } from 'rxjs';
import { Constants } from '../../constants/Constants';

@Component({
  selector: 'kairos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private subscription = new Subscription();
  private currentDate = new Date();
  public dateTimeJP = this.convertDateTimeZone(this.currentDate, Constants.localeJP, Constants.timezoneJP).getTime();

  constructor() { }

  ngOnInit(): void {
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
