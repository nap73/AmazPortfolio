import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskPlannerService {

  setOfTasks   : any = [] ;

  constructor(public http:HttpClient) { }

  storeEmployee(emp:any){
    this.http.post("http://localhost:3000/tasks",emp).
    subscribe(result=>console.log(result),error=>console.log(error));
    console.log("Successfully Stored ! ");
  }

  restoreEmployee(){
    this.http.get("http://localhost:3000/tasks").
    subscribe(result => this.formTable(result) ,error =>console.error());
}

formTable(tasks:any) {

  this.clearTable();
  console.log(tasks);
 
  for ( const task of tasks) {


    var table = document.getElementById("tasktable");

    var tableBody = table.getElementsByTagName("tbody")[0];
    var newRow = tableBody.insertRow(-1);

    newRow.setAttribute("scope","row");

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1); 
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    
     


    
     

    
    cell1.innerHTML = task.id ;
    cell2.innerHTML = task.taskname;
    cell3.innerHTML = task.empname ;
    cell4.innerHTML = task.deadline ; 

}

// console.log("Table Check") ;
}


clearTable() {

  console.log("Clearing  Table") ;
  var table = document.getElementById("tasktable");
  var tableBody = table.getElementsByTagName("tbody")[0];
   while(tableBody.hasChildNodes()){
      tableBody.removeChild(tableBody.lastChild);
   }
}


}
