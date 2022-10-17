import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {environment} from "../environments/environment";
import {BASE_PATH} from "../openapi";
import {SharedModule} from "./shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {AngularMaterialModule} from "./shared/angular-material.module";
import {TipperModule} from "./tipper/tipper.module";

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
      HttpClientModule
    ],
  providers: [{provide: BASE_PATH, useValue: environment.basePath},],
  bootstrap: [AppComponent]
})
export class AppModule { }
