import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipperOverviewComponent } from './tipper-overview/tipper-overview.component';
import { TipperNamesComponent } from './tipper-names/tipper-names.component';
import { TippedMatchesComponent } from './tipped-matches/tipped-matches.component';
import {AngularMaterialModule} from "../shared/angular-material.module";
import {SharedModule} from "../shared/shared.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TipperOverviewComponent,
    TipperNamesComponent,
    TippedMatchesComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedModule,
    MatFormFieldModule,
    FormsModule
  ]
})
export class TipperModule { }
