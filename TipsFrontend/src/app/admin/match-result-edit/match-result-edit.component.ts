import {Component, Input, OnInit} from '@angular/core';
import {MatchDto, TipsAdminService} from "../../../openapi";

@Component({
  selector: 'app-match-result-edit',
  templateUrl: './match-result-edit.component.html',
  styleUrls: ['./match-result-edit.component.scss']
})
export class MatchResultEditComponent implements OnInit {
  @Input() match: MatchDto | undefined;
  newValue1: number = 0;
  newValue2: number = 0;

  constructor(
    private adminService: TipsAdminService
  ) { }

  ngOnInit(): void {
    this.newValue1 = this.match!.shot
    this.newValue2 = this.match!.received
  }

  saveChanges() {
    this.match!.shot = this.newValue1;
    this.match!.received = this.newValue2;
    this.adminService.tipsAdminMatchResultsIdPut(this.match!.id, this.match).subscribe(() => {
    })
  }
}
