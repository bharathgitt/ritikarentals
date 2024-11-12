import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private route: Router) { }

  username: String = "";
  password: String = "";
  reqpwd: any;

  checkLogin() {
      
    this.reqpwd = this.username.slice(0, 3) + '@123';


    if (this.username == "admin" && this.password == "admin@123") {
      alert("Admin LoggedIN")
      this.route.navigateByUrl("/admin")

    } else if (this.password === this.reqpwd) {
      alert("User LoggedIN")
      this.route.navigateByUrl("/user")
    }
    else {
      alert("Invalid Credentials")
    }

  }







}
