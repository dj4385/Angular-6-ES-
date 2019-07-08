import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrlsService } from '../api/api-urls.service';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  clientUrl = this.URL.easySolAPI.CustomerDetail;
  constructor(
    private _httpClient: HttpClient,
    private URL: ApiUrlsService
  ) { }

  getClient(Dbname:any ,SuppName :any){
    return this._httpClient.post<any>(this.clientUrl,{"Dbname":Dbname,"SuppName":SuppName});
  }
}
