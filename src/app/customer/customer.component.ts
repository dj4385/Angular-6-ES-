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
  userName = ""
  uid = ""
  clientStatus :any = {}
  customer :any = []


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
    this.customerDetail()
  }

  getCookieValues(cookieData){
    if(cookieData == ""){
      this.Dbname = ""
      this.SuppName = ""
      this.uid = ""
      this.userName = ""
    } else {
      let cookieDataArr = cookieData.split("&",4);
      let Dname = cookieDataArr[0].toString()
      let Dbname = Dname.slice(Dname.indexOf("=") + 1,Dname.length)
      let uid = cookieDataArr[1].toString()
      let UID = uid.substr(uid.indexOf("=") + 1, uid.length);
      let Sname = cookieDataArr[2].toString()
      let SuppName = Sname.substr(Sname.indexOf("=") + 1, Sname.length);
      let uname = cookieDataArr[3].toString()
      let userName = uname.substr(uname.indexOf("=") + 1, uname.length);
      //calling a function
      this.getUserDetails(Dbname,SuppName,UID,userName)

    }
  }
  
  getUserDetails(Dbname,SuppName,UID,username){
    if(Dbname != "" && SuppName != "" && UID != "" && username != ""){
      this._client.getUser(Dbname,SuppName)
        .subscribe(
          res => {
            this.clientStatus = res;
            if(this.clientStatus.GetUserResult != ""){
              localStorage.setItem("AccessToken", this.clientStatus.GetUserResult)
              localStorage.setItem("username",username)
              localStorage.setItem("uid",UID)
              this._route.navigate(['/customer']);
            } else {
              this._route.navigate(['/404']);
            }
          },
          err => {
            alert(err.message)
          }
        )
    }
  }

  customerDetail(){
    this._client.getCustomer()
      .subscribe(
        res=> {
          this.customer = res;
          console.log(this.customer)
        }
      )
  }

  // orderComp(){
  //   this._route.navigate(['/order'],{queryParams: {"customerName": this.customer.customerName}})
  // }

}
