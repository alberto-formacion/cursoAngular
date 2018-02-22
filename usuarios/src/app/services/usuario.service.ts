import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../usuario/usuario';

@Injectable()
export class UsuarioService {

  url: string;

  constructor(
    private _http: Http
  ) { 
    this.url = "https://randomuser.me/api/";
  }

  getUsuarios(){
    return this._http
      .get(this.url)
      .map(usuario =>{
        const usu = usuario.json().results[0];
        return new Usuario(usu.name.first, usu.name.last, usu.picture.large, usu.nat, usu.location.city);
      });
  }

}
