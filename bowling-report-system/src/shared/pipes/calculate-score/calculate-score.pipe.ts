import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'CalculateScore' })
export class CalculateScorePipe implements PipeTransform {
  public transform(scores: any[]) {
    let finalScore:number = 0
    for(let i = 0; i<20;i+=2){
      if(scores[i]==='X'){
        finalScore += (10 + scores[i+2]+scores[i+3])
      } else if(scores[i]+scores[i+1]==10){
        finalScore += (scores[i]+scores[i+1]+ scores[i+2])
      } else if(scores[i+1]==='X') {
        finalScore += (10+scores[i+2])
      }else {
        finalScore += (scores[i]+scores[i+1])
      }
    }
    return finalScore;
  }
}
