import { Component, Input } from '@angular/core';
import { ProductoModel } from '../../model/producto.model';
import { Subscription } from 'rxjs';
import { ProductoService } from '../../services/producto.service';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-ingresos-egresos',
  standalone: true,
  imports: [
    NgClass,
    CommonModule
  ],
  templateUrl: './ingresos-egresos.component.html',
  styles: ``
})
export class IngresosEgresosComponent {
  @Input() tipoComponente!:string;
  
    items:ProductoModel[] = [];
    private subscription!: Subscription;
  
    
    constructor(private productoService:ProductoService){}
  
    ngOnInit():void{
      this.subscription = this.productoService.elementosGlobales$.subscribe(
        (productos) => {
          this.items = productos.filter(
            (producto) => producto.tipo === this.tipoComponente
          );
        }
      );
    }
  
    eliminarElemento(elementoEliminar: ProductoModel){
      this.productoService.eliminarProducto(elementoEliminar)
    }
  
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
}
