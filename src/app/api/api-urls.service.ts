import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlsService {

  constructor() { }

  easySolAPI = {
    CustomerDetail : "http://192.168.1.202/angularAPI/Login.svc/GetUser"
  }
}
