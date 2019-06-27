import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  producturl = "https://192.168.1.202/EasySolAPI/EsDataService.svc/products?stock=Y";
  // header = new HttpHeaders({
  //   "Authorization":"782a3a8f-7291-45ed-8c8f-6486d6379175",
  //   "Key":"PHR"});

  constructor(
    private _httpClient : HttpClient
  ) { }
  
  header = new HttpHeaders().set('Authorization','782a3a8f-7291-45ed-8c8f-6486d6379175').set("Key","PHR");

  httpOption = {
    headers : this.header
  }

  getProducts(){
    return this._httpClient.get(this.producturl,this.httpOption);
  }

}
