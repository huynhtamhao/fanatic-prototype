import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LayoutService } from '../../service/layout.service';

@Component({
  selector: 'kairos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title = '';
  public hidden = false;

  @Output() toggleSidebarEvent = new EventEmitter<void>();

  constructor(
    private layoutService: LayoutService,
  ) { }

  ngOnInit(): void {
    this.layoutService.headerTitle.subscribe(title => {
      this.title = title;
    });
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  toggleSidebar() {
    this.toggleSidebarEvent.emit();
  }
}
