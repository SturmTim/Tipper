import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TipperDto} from "../../../openapi";

@Component({
  selector: 'app-tipper-names',
  templateUrl: './tipper-names.component.html',
  styleUrls: ['./tipper-names.component.scss']
})
export class TipperNamesComponent implements OnInit {

  @Input() tippers: TipperDto[] = [];
  @Output() selectedTipperChanged: EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  tipperSelected(tipperId: number) {
    this.selectedTipperChanged.emit(tipperId)
  }

}
