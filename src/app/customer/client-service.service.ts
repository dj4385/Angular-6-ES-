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

  getClient(){
    return this._httpClient.get(this.clientUrl);
  }
}
