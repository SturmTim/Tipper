import {Component, Input, OnInit} from '@angular/core';
import {MatchDto, SingleTipDto, TipsService} from "../../../openapi";

@Component({
  selector: 'app-tipped-matches',
  templateUrl: './tipped-matches.component.html',
  styleUrls: ['./tipped-matches.component.scss']
})
export class TippedMatchesComponent implements OnInit {

  @Input() tips: SingleTipDto[] = [];
  @Input() tipperName: string = '';

  matches: MatchDto[] = [];
  goalDiff: number = 0;

  constructor(
    private tipsService: TipsService
  ) { }

  ngOnInit(): void {
    this.tipsService.tipsMatchResultsGet().subscribe(x => {
      this.matches = x
    })
  }

  getTip(id: number): SingleTipDto {
    return this.tips.find(x => x.matchWithResultId == id)!
  }
}
