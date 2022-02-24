import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SidebarItem } from './data/sidebar-item.metadata';

@Component({
  selector: 'kairos-sidebar-item',
  template: `
    <mat-accordion>
      <ng-container *ngIf="menuItem.submenu.length > 0; else elseTemplate">
        <mat-expansion-panel class="expansion-panel-child mat-elevation-z0">
          <mat-expansion-panel-header>
            <mat-panel-title>{{ menuItem.id }}</mat-panel-title>
          </mat-expansion-panel-header>
          <kairos-sidebar-item *ngFor="let menu of menuItem.submenu" [menuItem]="menu"></kairos-sidebar-item>
        </mat-expansion-panel>
      </ng-container>
      <mat-accordion>

      <ng-template #elseTemplate>
        <!-- <mat-action-list *ngIf="menuItem.path">  [routerLink]="menuItem.path"-->
        <mat-action-list>
          <button mat-list-item (click) ="redirectTo(menuItem.path)">{{ menuItem.id }}</button>
        </mat-action-list>
      </ng-template>
    </mat-accordion>
  `,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarItemComponent {

  @Input() menuItem!: SidebarItem;

  constructor(
    public router: Router,
    private toastrService: ToastrService,
  ) { }

  redirectTo(path: string) {
    if (path)
      void this.router.navigate([path]);
    else
      this.toastrService.warning('この機能は開発中です。');
  }

}
