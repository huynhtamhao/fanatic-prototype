import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kairos-sidebar-item',
  template: `
    <mat-accordion>
      <ng-container *ngIf="menuitem.submenu.length > 0; else elseTemplate">
        <mat-expansion-panel class="mat-elevation-z0">
          <mat-expansion-panel-header>
            <mat-panel-title>
              <mat-icon>{{ menuitem.icon }}</mat-icon> {{ menuitem.text }}
            </mat-panel-title>
          </mat-expansion-panel-header>
          <kairos-sidebar-item *ngFor="let menu of menuitem.submenu" [menuitem]="menu"></kairos-sidebar-item>
        </mat-expansion-panel>
      </ng-container>
      <mat-accordion>

      <ng-template #elseTemplate>
        <mat-action-list *ngIf="menuitem.path">
          <button mat-list-item [routerLink]="menuitem.path">
            <mat-icon>{{ menuitem.icon }}</mat-icon> {{ menuitem.text }}
          </button>
        </mat-action-list>
      </ng-template>
    </mat-accordion>
  `,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarItemComponent {

  @Input("menuitem") menuitem: any;
}
