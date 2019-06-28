import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    userID:"",
    password:""
  }

  constructor(
    private routes : Router
  ) { }

  ngOnInit() {
  }

  login(){
    this.routes.navigate(['customer']);
  }

}
