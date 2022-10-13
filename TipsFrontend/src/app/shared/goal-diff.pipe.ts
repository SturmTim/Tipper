import { Pipe, PipeTransform } from '@angular/core';
import {MatchDto} from "../../openapi";

@Pipe({
  name: 'goalDiff'
})
export class GoalDiffPipe implements PipeTransform {

  transform(tips: MatchDto[], minDiff: number): MatchDto[] {
    return tips.filter(x => x.shot - x.received >= minDiff || x.received - x.shot >= minDiff);
  }

}
