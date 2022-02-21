import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LayoutService } from '../../service/layout.service';

@Component({
  selector: 'kairos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title = '';

  @Output() toggleSidebarEvent = new EventEmitter<void>();

  constructor(
    private layoutService: LayoutService,
  ) { }

  ngOnInit(): void {
    this.layoutService.headerTitle.subscribe(title => {
      this.title = title;
    });
  }

  toggleSidebar() {
    this.toggleSidebarEvent.emit();
  }
}
