import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../../request/api';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  getURLLoginSAML() {
    return this.http.get(API.URL_LOGIN_SAML);
  }

  getURLLogoutSAML() {

    return this.http.get(API.URL_LOGOUT_SAML);
  }

}
