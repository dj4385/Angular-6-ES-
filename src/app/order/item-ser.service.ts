import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemSerService {

  itemUrl = "http://localhost:52174/Login.svc/Item";

  constructor(
    private _httpClient: HttpClient
  ) { }

  getAllItems(){
    return this._httpClient.get(this.itemUrl);
  }
}
