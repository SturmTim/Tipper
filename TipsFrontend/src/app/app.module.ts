import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {environment} from "../environments/environment";
import {BASE_PATH} from "../openapi";
import {SharedModule} from "./shared/shared.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AngularMaterialModule} from "./shared/angular-material.module";
import {TipperModule} from "./tipper/tipper.module";
import {LogInterceptor} from "./core/log";
import {ErrorInterceptor} from "./core/error";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      SharedModule,
      AngularMaterialModule,
      TipperModule,
      HttpClientModule,
      CoreModule
    ],
  providers: [{provide: BASE_PATH, useValue: environment.basePath},
    {provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
