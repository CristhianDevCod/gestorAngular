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
    this.subscription = this.productoService.elementosGlobales$.subscribe(
      (productos) => {
        this.ingresos = productos.filter(
          (date) => date.tipo === 'ingreso'
        ).reduce((acumulador, valorActual) => {
          return acumulador + valorActual.valor
        }, 0);

        this.egresos = productos.filter(
          (date) => date.tipo === 'egreso'
        ).reduce((acumulador, valorActual) => {
          return acumulador + valorActual.valor
        }, 0);

        this.presupuesto -= this.egresos;
        this.presupuesto += this.ingresos;
      }
    )
  }


}
