import { Component } from '@angular/core';
import { ProductoModel } from '../../model/producto.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-egresos',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './egresos.component.html',
  styles: ``
})
export class EgresosComponent {
  items:ProductoModel[] = [
      new ProductoModel('ingreso', 'gaseosa', 2500),
      new ProductoModel('ingreso', 'microondas', 411000)
    ];
  
    eliminarElemento(elementoEliminar: ProductoModel){
      const newItems = this.items.filter(nuevoRecorrido => nuevoRecorrido != elementoEliminar);
      this.items = newItems;
    }
}
