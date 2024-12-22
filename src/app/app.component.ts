import { Component } from '@angular/core';
import { DisponibleComponent } from "./layout/disponible/disponible.component";
import { IntroducirComponent } from "./layout/introducir/introducir.component";
import { IngresosComponent } from "./layout/ingreso-egreso/ingresos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DisponibleComponent,
    IntroducirComponent,
    IngresosComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
