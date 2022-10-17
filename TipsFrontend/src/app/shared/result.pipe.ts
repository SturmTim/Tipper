import { Pipe, PipeTransform } from '@angular/core';
import {MatchDto, SingleTipDto} from "../../openapi";

@Pipe({
  name: 'result'
})
export class ResultPipe implements PipeTransform {

  transform(tip : SingleTipDto | MatchDto): string {
    return `${tip.shot != null ? tip.shot : ' '}:${tip.received != null ? tip.received : ' '}`;
  }

}
