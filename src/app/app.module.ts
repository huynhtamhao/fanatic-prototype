import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { KairosCommonComponentsModule } from '@shared/components/kairos-common-components.module';
import { ToastrModule } from 'ngx-toastr';
import { TranslocoRootModule } from './core/transloco/transloco-root.module';
import { ConfigService } from './core/service/config.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export function initialize(configService: ConfigService) {
  return () => configService.loadConfig();
}

@NgModule({
  declarations: [
    AppComponent, //
  ],
  imports: [
    BrowserModule, //
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    TranslocoRootModule,
    KairosCommonComponentsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: 'API_HOST',
      useFactory: (configService: ConfigService) => {
        configService.getAPIHost();
      },
      deps: [ConfigService],
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
