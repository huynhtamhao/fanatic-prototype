import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'kairos-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {

  @Input("menuitem") menuitem: any;

  style: any;
  styleLink: any;
  ngOnInit(): void {

  }
}
