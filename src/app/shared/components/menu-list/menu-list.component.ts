import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'kairos-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent {
  @Input() public items = ['参照', '更新', 'コピー新規'];
  @Output() public itemSelect = new EventEmitter<Record<string, unknown>>();

  public onClick(id: number, name: string) {
    this.itemSelect.emit({
      itemId: id,
      itemName: name,
    });
  }

}
