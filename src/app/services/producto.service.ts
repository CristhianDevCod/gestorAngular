import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProductoModel } from '../model/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private _elementosGlobales = new BehaviorSubject<ProductoModel[]>([]);
  elementosGlobales$ = this._elementosGlobales.asObservable();

  private eliminacionProductoSource = new Subject<ProductoModel>();
  eliminacionProducto$ = this.eliminacionProductoSource.asObservable();

  agregarProducto(producto:ProductoModel):void{
    const elementos = this._elementosGlobales.getValue();
    elementos.push(producto);
    this._elementosGlobales.next(elementos);
  }

  eliminarProducto(producto:ProductoModel):void{
    const elementos = this._elementosGlobales
      .getValue()
      .filter(r => r !== producto);
    this._elementosGlobales.next(elementos);
  }
}
