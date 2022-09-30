import { IUser } from './../../../shared/models/IUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import jwtDecode from 'jwt-decode';
import { API } from '../../request/api';


const KEY = 'token';


@Injectable({
  providedIn: 'root'
})
export class AccessService {


  private TokenDecoded !: IUser
  constructor(private http : HttpClient) { }

  loadToken(){
    return localStorage.getItem(KEY) ?? '';
  }

  saveToken(token : any){
    localStorage.setItem(KEY, token);
    this.setUserEmail()
  }

  deleteToken(){
    localStorage.removeItem(KEY);
  }

  hasToken(){
    return !! this.loadToken();
  }

  validateToken() : Observable<any>{
    return this.http.get(API.URL_VALID_TOKEN);

  }

  setUserEmail(){
    this.tokenDecode()
    if(this.TokenDecoded){
      localStorage.setItem('useremail', this.TokenDecoded.userEmail)
    }

  }

  getUserEmail(){
    return localStorage.getItem('useremail') ?? ''
  }

  tokenDecode()    {

    if(this.hasToken()){
      this.TokenDecoded = jwtDecode(this.loadToken())
    }


  }

}
