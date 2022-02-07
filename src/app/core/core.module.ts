import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { TranslocoModule } from '@ngneat/transloco';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
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
