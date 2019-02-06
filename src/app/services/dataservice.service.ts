import { Injectable } from '@angular/core';

import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
   httpHeaders = new HttpHeaders ({
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient, private loginService: LoginService) { }

  getData(){
    return this.http.get('https://lottery-app-6981c.firebaseio.com/data.json');
  }

  sendData(data: []){
    const token = this.loginService.getToken();
    return this.http.post('https://lottery-app-6981c.firebaseio.com/data.json?auth=' + token, data, {headers: this.httpHeaders});
}
  
}
