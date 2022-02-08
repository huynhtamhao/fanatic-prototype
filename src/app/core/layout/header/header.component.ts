import { Component, OnInit } from '@angular/core';
import { map, share, Subscription, timer } from 'rxjs';
import { Constants } from '../../constants/Constants';

@Component({
  selector: 'kairos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  timezoneJP = Constants.timezoneJP;

  public currentDate = new Date();
  public currentTime = this.currentDate;
  private midnight = new Date(this.currentDate.setHours(0, 0, 0, 0));
  private lastNight = this.midnight.setDate(this.midnight.getDate() + 1);
  private subscription = new Subscription();

  constructor() { }

  ngOnInit(): void {
    // time annotation
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        this.currentTime = time;
        if (this.currentTime.getTime() === this.lastNight) {
          this.setTime();
        }
      });
  }

  // next date
  setTime() {
    this.currentDate = new Date();
    this.midnight = new Date(this.currentDate.setHours(0, 0, 0, 0));
    this.lastNight = this.midnight.setDate(this.midnight.getDate() + 1);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
