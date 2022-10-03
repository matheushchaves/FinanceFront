import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/app/core/request/api';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(email: string, senha: string){
    return this.http.post<any>(API.LOGIN_BASIC,{email, senha})
  }

}
