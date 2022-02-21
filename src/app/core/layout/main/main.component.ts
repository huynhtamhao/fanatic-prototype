import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { LayoutService } from '../../service/layout.service';


@Component({
  selector: 'kairos-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],

})
export class MainComponent {

  constructor(
    private router: Router,
    private layoutService: LayoutService
  ) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        this.layoutService.clearAll();
      }
    });
  }
}
