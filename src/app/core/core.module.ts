import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ErrorSummaryComponent } from './layout/error-summary/error-summary.component';
import { SidebarItemComponent } from './layout/sidebar/sidebar-item.component';
import { SidebarMainItemComponent } from './layout/sidebar/sidebar-main-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    ErrorSummaryComponent,
    SidebarComponent,
    SidebarMainItemComponent,
    SidebarItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    FlexLayoutModule,
  ],
  exports: [
    TranslocoRootModule,
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
