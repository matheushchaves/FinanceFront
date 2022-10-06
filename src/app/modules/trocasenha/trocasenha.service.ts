import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/app/core/request/api';
import { IUsuario } from 'src/app/models/IUsuario';

@Injectable({
  providedIn: 'root'
})
export class TrocasenhaService {

  constructor(private http: HttpClient) { }

  TrocaSenha(usuario: IUsuario):Observable<IUsuario>{
      return this.http.put<any>(API.USUARIO_API, usuario);
  }

}
