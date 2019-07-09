import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userName = ""
  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
    this.userName = localStorage.getItem("username")
  }

  logout(){
    localStorage.clear();
    this._router.navigate(['login']);
  }

}
