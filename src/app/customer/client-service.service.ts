import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  clientUrl = "http://localhost:52174/Login.svc/GetUser";
  constructor(
    private _httpClient: HttpClient
  ) { }

  getUser(Dbname:any ,SuppName :any){
    return this._httpClient.post<any>(this.clientUrl,{"Dbname":Dbname,"SuppName":SuppName});
  }
}
