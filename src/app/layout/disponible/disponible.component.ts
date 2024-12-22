import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-disponible',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './disponible.component.html',
  styles: ``
})
export class DisponibleComponent {
  presupuesto: number = 10000;

}
