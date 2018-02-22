import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [UsuarioService]
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario;

  constructor(
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this._usuarioService
      .getUsuarios()
      .subscribe(usuario=>{
        this.usuario = usuario;
      })
  }

}
