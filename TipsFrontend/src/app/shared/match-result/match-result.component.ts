import {Component, Input, OnInit} from '@angular/core';
import {MatchDto, SingleTipDto} from "../../../openapi";

@Component({
  selector: 'app-match-result',
  templateUrl: './match-result.component.html',
  styleUrls: ['./match-result.component.scss']
})
export class MatchResultComponent implements OnInit {
  @Input() match: MatchDto | undefined;
  @Input() tip: SingleTipDto | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
