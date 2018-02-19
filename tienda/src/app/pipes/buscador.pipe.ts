import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../producto/producto';

@Pipe({
  name: 'buscador',
  pure: false
})
export class BuscadorPipe implements PipeTransform {

  transform(productos: Producto[], productoBuscar: string): any {
    if(productoBuscar && productoBuscar!=""){
      return productos.filter(producto => producto.nombre.toLowerCase().indexOf(productoBuscar.toLocaleLowerCase())>-1);
    }
    return productos;
  }

}
