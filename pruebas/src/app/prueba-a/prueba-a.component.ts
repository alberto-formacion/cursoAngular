import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba-a',
  templateUrl: './prueba-a.component.html',
  styleUrls: ['./prueba-a.component.css']
})
export class PruebaAComponent implements OnInit {

  texto: string;
  aparece: boolean;
  color: string;

  constructor() { }

  ngOnInit() {
    this.color = "yellow";
    this.aparece = false;
  }

  tocado(){
    this.texto = "Has tocado el boton ROJO!!!";
  }

  mensajeToggle(){
    this.aparece = !this.aparece;
  }

  cambiarColor(color: string){
    this.color = color;
  }

}
