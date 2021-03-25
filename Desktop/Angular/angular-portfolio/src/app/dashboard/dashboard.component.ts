import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { } 

  dateTime : any = "";
  msgname : string = "";
  msgcontact : string = "";
  userlogin : string = "" ;
  ngOnInit(): void {
   
    this.userlogin  = localStorage.getItem("user") ;
    this.dateTime = new  Date();

  }

  addValue (dash) {
   
    // console.log(dash.contact) ;
    // console.log(dash.name) ;
   
    var table = document.getElementById("details");
    var body = table.getElementsByTagName("tbody")[0];

    var newrow = body.insertRow();  // row created 
    var cell = newrow.insertCell(0);  // row.cell
    var cell1 = newrow.insertCell(1);  // row.cell1 

    cell.innerHTML = dash.name ;
    cell1.innerHTML= dash.contact ;

   
    


  }

}
