import { Component } from '@angular/core';
import { Router,NavigationEnd, NavigationStart, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import { LayoutService } from '../../service/layout.service';


@Component({
  selector: 'kairos-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],

})
export class MainComponent {

  constructor(
    private router: Router,
    private activatedRoute:ActivatedRoute,
    private layoutService: LayoutService
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.layoutService.clearAll()),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild
        return route
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data),
    ).subscribe(data => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      this.layoutService.setHeaderTitle(data['title']);
    }
    )
  }
}
