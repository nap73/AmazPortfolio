import { Component, OnInit } from '@angular/core';
import { TaskPlannerService } from '../task-planner.service';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})
export class PlannerComponent implements OnInit {

  constructor(public taskSer : TaskPlannerService) { }
  Tasks   : any = [] ;
  ngOnInit(): void {
  }

  store(taskRef){
    console.log(taskRef);
    this.taskSer.storeEmployee(taskRef);
    // this.taskSer.restoreEmployee();
   

  }

  restore() {
     this.taskSer.restoreEmployee();
}



}
