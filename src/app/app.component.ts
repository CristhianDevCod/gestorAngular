import { Component } from '@angular/core';
import { DisponibleComponent } from "./layout/disponible/disponible.component";
import { IntroducirComponent } from "./layout/introducir/introducir.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DisponibleComponent, IntroducirComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
