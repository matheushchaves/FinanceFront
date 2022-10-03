// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

const jwtHelper = new JwtHelperService();
const TKN = 'token'
@Injectable()
export class AuthService {
  constructor() {}
  // ...
  public setToken(token: string):void{
    localStorage.setItem(TKN, token)
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem(TKN)??"";
    // Check whether the token is expired and return
    // true or false
    return !jwtHelper.isTokenExpired(token);
  }
}
