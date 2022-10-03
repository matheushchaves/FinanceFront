import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUsuario } from './../../models/IUsuario';
import { Injectable } from '@angular/core';
import { API } from '../../core/request/api';
@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(private http: HttpClient) { }

  singIn(usuario: IUsuario){
      return this.http.post<IUsuario>(API.USUARIO_API, usuario)
  }

}
