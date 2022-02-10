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
    ToastrModule.forRoot(), // ToastrModule added
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
