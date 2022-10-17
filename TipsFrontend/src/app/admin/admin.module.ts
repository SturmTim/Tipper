import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import { MatchResultEditComponent } from './match-result-edit/match-result-edit.component';
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {AdminRoutingModule} from "./admin-routing.module";
import {AngularMaterialModule} from "../shared/angular-material.module";

@NgModule({
  declarations: [
    AdminComponent,
    MatchResultEditComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    SharedModule,
    FormsModule,
    AdminRoutingModule,
    AngularMaterialModule
  ]
})
export class AdminModule { }
