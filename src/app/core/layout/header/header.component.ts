import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeaderUtilsService } from '../../service/header-utils.service';

@Component({
  selector: 'kairos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title = '';

  @Output() toggleSidebarEvent = new EventEmitter<void>();

  constructor(
    private headerUtils: HeaderUtilsService,
  ) { }

  ngOnInit(): void {
    // title
    this.headerUtils.title.subscribe(title => {
      this.title = title;
    });
  }

  toggleSidebar() {
    this.toggleSidebarEvent.emit();
  }
}
