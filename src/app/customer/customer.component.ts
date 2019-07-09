import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ClientServiceService } from './client-service.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  cookieValue = ""
  cookieArr = []
  Dbname = ""
  SuppName = ""
  clientStatus = {}


  @ViewChild('custName') id: ElementRef<HTMLElement>;


  constructor(
    private _cookieService: CookieService,
    private _route: Router,
    private _client: ClientServiceService
  ) { }

  ngOnInit() {
    this.id.nativeElement.focus();
    this.cookieValue = this._cookieService.get('userInfo')
    this.getCookieValues(this.cookieValue)
    
    

    // console.log("Cookie value",this.cookieValue)
    // this.checkUserDetails();
    // this.getClientDetails();
  }

  getCookieValues(cookieData){
    if(cookieData == ""){
      this.Dbname = ""
      this.SuppName = ""
    } else {
      let cookieDataArr = cookieData.split("&",4);
      let Dname = cookieDataArr[0].toString()
      let Dbname = Dname.slice(Dname.indexOf("=") + 1,Dname.length)
      let Sname = cookieDataArr[2].toString()
      let SuppName = Sname.substr(Sname.indexOf("=") + 1, Sname.length);
      //calling a function
      this.getClientDetails(Dbname,SuppName)

    }
  }
  // checkUserDetails(){
  //   if(this.cookieValue === ""){
  //     this._route.navigate(['/404']);
  //   } else {
  //     this._route.navigate(['/customer']);
  //   }
  // }
  
  getClientDetails(Dbname,SuppName){
    if(Dbname != "" && SuppName != ""){
      this._client.getClient(Dbname,SuppName)
        .subscribe(
          res => {
            this.clientStatus = res;
            console.log(this.clientStatus)
          },
          err => {
            console.log(err.message)
          }
        )
    }
  }

}
