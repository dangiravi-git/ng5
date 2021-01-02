import { Injectable } from '@angular/core';
import { Observable ,  BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  private goals = new BehaviorSubject<any>(['This is Initial Goal','Another silly life goal']);
  goal = this.goals.asObservable();
  constructor() { }
  changeGoal(goal:any){
    this.goals.next(goal);
  }
}
