import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  listaProductos: Producto[] = new Array<Producto>();
  carrito: Producto[] = new Array<Producto>();
  precioTotal: number = 0;

  constructor() { }

  ngOnInit() {
    this.listaProductos.push(new Producto("Gris",20,"/assets/img/gris.jpg"));
    this.listaProductos.push(new Producto("Azul",50,"/assets/img/azul.jpg"));
    this.listaProductos.push(new Producto("Running",10,"/assets/img/running.jpg"));
  }

  anadirProducto(producto:Producto){
    this.carrito.push(producto);
    this.precioTotal = this.precioTotal + producto.precio;
  }
}
