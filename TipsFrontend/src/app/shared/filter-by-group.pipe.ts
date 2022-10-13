import { Pipe, PipeTransform } from '@angular/core';
import {TipperDto} from "../../openapi";

@Pipe({
  name: 'filterByGroup'
})
export class FilterByGroupPipe implements PipeTransform {

  transform(tippers: TipperDto[], category: string): TipperDto[] {
    return tippers.filter(x => x.tippingGroups.includes(category));
  }

}
