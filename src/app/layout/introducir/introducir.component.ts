import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { 
  FormsModule, 
  ReactiveFormsModule,
  FormControl, 
  FormGroup,
  Validators
} from '@angular/forms';
import { ProductoService } from '../../services/producto.service';
import { ProductoModel } from '../../model/producto.model';

@Component({
  selector: 'app-introducir',
  standalone: true,
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './introducir.component.html'
})
export class IntroducirComponent {

  constructor(private productoService:ProductoService){}

  //Arreglo local
  // items: ProductoModel[] = [];

  //Control de formulario
  ingresoForm = new FormGroup({
    tipo: new FormControl('', Validators.required),
    producto: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    valor: new FormControl('', [Validators.required, Validators.min(1)])
  });

  //función dinamica para clases
  get selectClass():string{
    switch (this.ingresoForm.value.tipo) {
      case "ingreso":
        return "border border-success"
      case "egreso":
        return "border border-danger"
      default:
        return ""
    }
  }

  //Agregar un nuevo producto
  agregarNuevo(){
    if(this.ingresoForm.valid){
      const nuevoProducto = new ProductoModel(
        this.ingresoForm.value.tipo!,
        this.ingresoForm.value.producto!,
        Number.parseInt(this.ingresoForm.value.valor!)
      );
      this.productoService.agregarProducto(nuevoProducto);
      this.ingresoForm.reset({
        tipo: ''
      });
    }
    return;
  }
}
