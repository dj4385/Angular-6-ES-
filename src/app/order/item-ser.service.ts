import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemSerService {

  itemUrl = "http://localhost:52174/Login.svc/Item";
  itemListUrl = "http://localhost:52174/Login.svc/storeSelectedItems";
  itemSelectedListUrl = "http://localhost:52174/Login.svc/SelectedItem";
  deleteItemUrl = "http://localhost:52174/Login.svc/DeleteItem";
  constructor(
    private _httpClient: HttpClient
  ) { }

  getAllItems(){
    return this._httpClient.get(this.itemUrl);
  }
  selectItem(code,itemName,userName ,qty, pack,rate,mrp,totalPrice){
    return this._httpClient.post(this.itemListUrl, {"code":code,"itemName" : itemName,"userName" : userName ,"qty" : qty, "pack" : pack,"rate" : rate,"mrp" : mrp,"totalPrice" : totalPrice} )
  }
  getSelectedItemList(){
    return this._httpClient.get(this.itemSelectedListUrl)
  }
  deleteSelectedItem(code){
    return this._httpClient.request('DELETE',this.deleteItemUrl, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body : {"code":code}
    })
  }
}
