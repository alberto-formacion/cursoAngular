import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  listaProductos: Producto[] = new Array<Producto>();
  producto: Producto = new Producto("",0,"",0);
  carrito: Producto[] = new Array<Producto>();
  precioTotal: number = 0;
  productoBuscar = "";

  constructor() { }

  ngOnInit() {
    this.listaProductos.push(new Producto("Gris",20,"/assets/img/gris.jpg",20));
    this.listaProductos.push(new Producto("Azul",50,"/assets/img/azul.jpg",15));
    this.listaProductos.push(new Producto("Running",10,"/assets/img/running.jpg",10));
  }

  anadirProducto(producto:Producto){
    this.carrito.push(producto);
    console.log(producto);
    this.precioTotal = this.precioTotal + producto.precio;
  }

  guardarProducto(){
    this.producto.imagen = "/assets/img/running.jpg";
    this.listaProductos.push(new Producto(this.producto.nombre, parseFloat(this.producto.precio.toString()),"/assets/img/running.jpg", parseInt(this.producto.stock.toString())));
    this.producto = new Producto("",0,"",0);
  }
}
