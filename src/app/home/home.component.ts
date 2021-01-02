import { Component, OnInit } from '@angular/core';
import{trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';
import { DataService} from '../data.service';
import { ThrowStmt } from '@angular/compiler';
import { NEVER } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[]
})
export class HomeComponent implements OnInit {
  itemCount: number=0;  
  btnText: string='Add An Item';
  goalText: string='My first life goal';
  goals: string[] =[];

  constructor(private _data : DataService) { }

  ngOnInit(): void {
    this._data.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }
  addItem(){
    this.goals.push(this.goalText );
    this._data.changeGoal(this.goals);
    this.goalText='';
    this.itemCount= this.goals.length;
  }
  removeItem(i:any){
    this.goals.splice(i,1);
    this._data.changeGoal(this.goals);
    this.itemCount= this.goals.length;
  }

}
