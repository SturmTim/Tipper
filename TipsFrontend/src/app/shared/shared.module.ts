import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchResultComponent } from './match-result/match-result.component';
import { FlagComponent } from './flag/flag.component';
import { ResultPipe } from './result.pipe';
import { FilterByGroupPipe } from './filter-by-group.pipe';
import { GoalDiffPipe } from './goal-diff.pipe';
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
  declarations: [
    MatchResultComponent,
    FlagComponent,
    ResultPipe,
    FilterByGroupPipe,
    GoalDiffPipe
  ],
    exports: [
        MatchResultComponent,
        FlagComponent,
        FilterByGroupPipe,
        GoalDiffPipe,
        ResultPipe
    ],
  imports: [
    CommonModule,
    MatFormFieldModule
  ]
})
export class SharedModule { }
