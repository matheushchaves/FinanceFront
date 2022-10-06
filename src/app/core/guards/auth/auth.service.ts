import { IUsuario } from './../../../models/IUsuario';
// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

const jwtHelper = new JwtHelperService();
const TKN = 'PMF-TOKEN'
const USR = 'PMF-USER'
@Injectable()
export class AuthService {
  constructor() {}

  public LogOut(){
    localStorage.removeItem(TKN);
    localStorage.removeItem(USR);
  }
  public setToken(token: string):void{
    localStorage.setItem(TKN, token)
  }
  public setUser(user: IUsuario):void{
    localStorage.setItem(USR, JSON.stringify(user))
  }
  public getToken():string{
    const token = localStorage.getItem(TKN)??"";
    return token;
  }
  public isAuthenticated(): boolean {
    const token = localStorage.getItem(TKN)??"";
    // Check whether the token is expired and return
    // true or false
    return !jwtHelper.isTokenExpired(token);
  }
  public getNomeUsuario(): string {
    const usr = localStorage.getItem(USR)??"{}";
    const user: IUsuario = JSON.parse(usr)
    return user.nome
  }
  public getRegra(): string {
    const usr = localStorage.getItem(USR)??"{}";
    const user: IUsuario = JSON.parse(usr)
    return user.regra;
  }
  public getEmail(): string {
    const usr = localStorage.getItem(USR)??"{}";
    const user: IUsuario = JSON.parse(usr)
    return user.email;
  }
  public getUsuario(): IUsuario {
    const usr = localStorage.getItem(USR)??"{}";
    const user: IUsuario = JSON.parse(usr)
    return user;
  }
}
