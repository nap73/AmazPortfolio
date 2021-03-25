import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router){}
  msg : string = "" ;
  ngOnInit(): void {
   
  }

  logUser(login) {


     var user =  localStorage.getItem("user");
     var pass =  localStorage.getItem("pass");

     if(user == null || pass == null) {
       console.log("No account found ! Please SignUp to create account")
     }
     else{

      if(login.user == user && login.pass == pass) {
        console.log("ok");
        this.router.navigate(['dashboard']);
        
      }
      else{
//        console.log("Incorrect username or passcode ! please try again  !!");
      this.msg = "Incorrect username or passcode ! please try again  !!" ;
     
      }
     }

     
 //  console.log(login);

 

    

}

}
