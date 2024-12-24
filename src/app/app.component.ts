import { Component } from '@angular/core';
import { DisponibleComponent } from "./layout/disponible/disponible.component";
import { IntroducirComponent } from "./layout/introducir/introducir.component";
import { IngresosEgresosComponent } from "./layout/ingresos-egresos/ingresos-egresos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DisponibleComponent,
    IntroducirComponent,
    IngresosEgresosComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  componenteIngreso: string = 'ingreso';
  componenteEgreso:string = 'egreso';
}
