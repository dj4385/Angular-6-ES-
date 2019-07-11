import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemSerService {

  itemUrl = "http://localhost:52174/Login.svc/Item";
  itemListUrl = "http://localhost:52174/Login.svc/storeSelectedItems";
  itemSelectedListUrl = "http://localhost:52174/Login.svc/SelectedItem?userName";
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
  getSelectedItemList(userName){
      // let params = new HttpParams();
      // for ( let key of Object.keys(userName))
      // {
      //   if(!!userName[key]){
      //     params = params.append(key, userName[key]);
      //   }
      // }
  
      return this._httpClient.get<any>(this.itemSelectedListUrl+"="+userName)
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
