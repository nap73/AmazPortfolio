import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' ;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public router:Router) { } 

  ngOnInit(): void {
  }

  signUp(signup) {

   
    console.log(signup);
    localStorage.setItem("user", signup.user);
    localStorage.setItem("pass", signup.pass);
    console.log("session stored !!");
    alert("Congratulations ! Your account is created !!")
    this.router.navigate(["login"]) ;

}

}
