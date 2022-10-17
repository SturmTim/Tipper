import { Component, OnInit } from '@angular/core';
import {SingleTipDto, TipperDto, TipsService} from "../../../openapi";

@Component({
  selector: 'app-tipper-overview',
  templateUrl: './tipper-overview.component.html',
  styleUrls: ['./tipper-overview.component.scss']
})
export class TipperOverviewComponent implements OnInit {

  tippers: TipperDto[] = [];
  selectedTipper: string = "";
  tips: SingleTipDto[] = [];
  tipperGroups: string[] = [];
  filter: string = '';

  constructor(
    private tipsService: TipsService
  ) { }

  ngOnInit(): void {
    this.tipsService.tipsTipperNamesGet().subscribe(x => {
      this.tippers = x
      this.setTags()
    });
  }

  private setTags() {
    this.tippers.forEach(tipper => {
      tipper.tippingGroups.split(",").forEach(tag => {
        if(!this.tipperGroups.includes(tag) && tag != "") {
          this.tipperGroups.push(tag)
        }
      })
    })
  }

  setTips(id: number) {
    this.tips = []
    this.tipsService.tipsTipsTipperIdGet(id).subscribe(x => {
      this.selectedTipper = x.tipperName
      x.tips.forEach(tip => {
        this.tips.push(tip)
      })
    })
  }
}
