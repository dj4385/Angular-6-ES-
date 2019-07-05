import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ClientServiceService } from './client-service.service';
import { type } from 'os';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  cookieValue = ""
  @ViewChild('custName') id: ElementRef<HTMLElement>;


  constructor(
    private _cookieService: CookieService,
    private _route: Router,
    private _client: ClientServiceService
  ) { }

  ngOnInit() {
    this.id.nativeElement.focus();
    this.cookieValue = this._cookieService.get('userInfo')
    console.log("Cookie value",this.cookieValue)
    this.checkUserDetails();
    this.getClientDetails();
  }
  
  checkUserDetails(){
    if(this.cookieValue === ""){
      this._route.navigate(['/404']);
    } else {
      this._route.navigate(['/customer']);
    }
  }
  
  client = []
  
  getClientDetails(){
    this._client.getClient()
      .subscribe(
        res => {
          this.client = res;
          console.log("Arr:",this.client, typeof(this.client));
        },
        err => {
          console.log(err);
        }
      )
  }

  



}
