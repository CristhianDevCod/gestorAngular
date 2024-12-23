import { Injectable } from '@angular/core';
import { ProductoModel } from '../model/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  elementos: ProductoModel[] = [];

  constructor() { }

  agregarProducto(producto:ProductoModel):void{
    this.elementos.push(producto);
  }

  eliminarProducto(producto:ProductoModel):void{
    const nuevosElementos = this.elementos.filter(r => r != producto)
    this.elementos = nuevosElementos;
  }
}
