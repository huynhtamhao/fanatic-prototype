import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'kairos-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  @Input() public items = ['参照', '更新', 'コピー新規'];
  @Output() public itemSelect = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(id: number, name: string) {
    this.itemSelect.emit({
      itemId: id,
      itemName: name, 
    });
  }

}
