import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlsService {

  constructor() { }

  easySolAPI = {
    CustomerDetail : "http://localhost:52174/Login.svc/GetUser"
  }
}
