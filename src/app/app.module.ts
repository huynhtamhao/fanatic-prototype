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
import { AuthenticationModule } from './authentication/authentication.module';

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
    AuthenticationModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-center',
    }),
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
