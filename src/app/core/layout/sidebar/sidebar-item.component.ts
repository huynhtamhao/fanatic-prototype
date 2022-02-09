import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'kairos-sidebar-item',
  template: `
    <mat-accordion>
      <ng-container *ngIf="menuItem.submenu.length > 0; else elseTemplate">
        <mat-expansion-panel class="mat-elevation-z0">
          <mat-expansion-panel-header>
            <mat-panel-title>
              <mat-icon>{{ menuItem.icon }}</mat-icon> {{ menuItem.id }}
            </mat-panel-title>
          </mat-expansion-panel-header>
          <kairos-sidebar-item *ngFor="let menu of menuItem.submenu" [menuItem]="menu"></kairos-sidebar-item>
        </mat-expansion-panel>
      </ng-container>
      <mat-accordion>

      <ng-template #elseTemplate>
        <!-- <mat-action-list *ngIf="menuItem.path">  [routerLink]="menuItem.path"-->
        <mat-action-list>
          <button mat-list-item (click) ="redirectTo(menuItem.path)">
            <mat-icon>{{ menuItem.icon }}</mat-icon> {{ menuItem.id }}
          </button>
        </mat-action-list>
      </ng-template>
    </mat-accordion>
  `,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarItemComponent {

  @Input("menuItem") menuItem: any;

  constructor(
    public router: Router,
    private toastrService: ToastrService,
  ) { }

  redirectTo(path: string) {
    if (path)
      this.router.navigate([path]);
    else
      this.toastrService.warning('この機能は開発中です。');
  }

}
