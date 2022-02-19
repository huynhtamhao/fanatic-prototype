import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd, NavigationStart } from '@angular/router';
import { ErrorUtilsService } from '../../service/error-utils.service';
import { HeaderUtilsService } from '../../service/header-utils.service';


@Component({
  selector: 'kairos-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],

})
export class MainComponent implements OnInit {

  constructor(
    private router: Router,
    private errorService: ErrorUtilsService,
    private headerService: HeaderUtilsService,
  ) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        this.errorService.clearErrorSummary();
        this.headerService.clearTitle();
      }
    });
  }

  ngOnInit(): void {
    console.log('will use in future');
   }
}
