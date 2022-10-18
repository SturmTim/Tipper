import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './snackbar/snackbar.component';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule
  ]
})
export class CoreModule { }
