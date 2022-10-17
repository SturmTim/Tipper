import {Component, Input, OnInit} from '@angular/core';
import {MatchDto} from "../../../openapi";

@Component({
  selector: 'app-match-result-edit',
  templateUrl: './match-result-edit.component.html',
  styleUrls: ['./match-result-edit.component.scss']
})
export class MatchResultEditComponent implements OnInit {
  @Input() match: MatchDto | undefined;
  newValue1: number = 1;
  newValue2: number = 1;

  constructor() { }

  ngOnInit(): void {
    this.newValue1 = this.match!.shot
    this.newValue2 = this.match!.received
  }

}
