import {Component, Input, OnInit} from '@angular/core';
import {flagMapper} from "./flagMapper";

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss']
})
export class FlagComponent implements OnInit {

  @Input() country: string = "";
  @Input() useText: boolean = false;
  @Input() isTextLeft: boolean = false;

  countryCode: string = "";

  constructor(
  ) { }

  ngOnInit(): void {
    this.countryCode = flagMapper[this.country];
  }
}
