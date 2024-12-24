import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../services/producto.service';
import { ProductoModel } from '../../model/producto.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-disponible',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './disponible.component.html',
  styles: ``
})
export class DisponibleComponent {
  presupuesto: number = 3000000;
  ingresos:number = 0;
  egresos:number = 0;
  private subscription!: Subscription;

  constructor(private productoService: ProductoService){}

  ngOnInit():void{
    this.subscription = this.productoService.elementosGlobales$.subscribe((productos) => {
      // Recalcular ingresos y egresos totales
        this.ingresos = productos
          .filter((date) => date.tipo === 'ingreso')
          .reduce((acumulador, valorActual) => acumulador + valorActual.valor, 0);

        this.egresos = productos
          .filter((date) => date.tipo === 'egreso')
          .reduce((acumulador, valorActual) => acumulador + valorActual.valor, 0);

      // Actualizar presupuesto neto
      this.presupuesto = 3000000 + this.ingresos - this.egresos
    });

    // Suscribirse a eliminaciones de elementos
    this.productoService.eliminacionProducto$.subscribe((producto) => {
      this.ajustarPresupuesto(producto)
    });
  }

  ajustarPresupuesto(producto: ProductoModel):void{
    if(producto.tipo === 'ingreso'){
      this.ingresos -= producto.valor;
      this.presupuesto -= producto.valor;
    } else if (producto.tipo === 'egreso'){
      this.egresos -= producto.valor;
      this.presupuesto += producto.valor;
    }
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }
}
