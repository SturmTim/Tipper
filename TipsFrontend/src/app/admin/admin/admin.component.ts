import { Component, OnInit } from '@angular/core';
import {MatchDto, TipsAdminService, TipsService} from "../../../openapi";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  matches: MatchDto[] = [];

  constructor(
    private adminService: TipsAdminService,
    private tipsService: TipsService
  ) { }

  ngOnInit(): void {
    this.tipsService.tipsMatchResultsGet().subscribe(matches => {
      this.matches = matches;
    })
  }



}
