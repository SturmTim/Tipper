import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipperOverviewComponent } from './tipper-overview/tipper-overview.component';
import { TipperNamesComponent } from './tipper-names/tipper-names.component';
import { TippedMatchesComponent } from './tipped-matches/tipped-matches.component';



@NgModule({
  declarations: [
    TipperOverviewComponent,
    TipperNamesComponent,
    TippedMatchesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TipperModule { }
