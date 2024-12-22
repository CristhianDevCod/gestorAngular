import { Component } from '@angular/core';
import { 
  FormsModule, 
  ReactiveFormsModule,
  FormControl, 
  FormGroup,
  Validators
} from '@angular/forms'



@Component({
  selector: 'app-introducir',
  standalone: true,
  imports: [
    FormsModule, 
    ReactiveFormsModule
  ],
  templateUrl: './introducir.component.html',
  styles: ``
})
export class IntroducirComponent {

  ingresoForm = new FormGroup({
    tipo: new FormControl('', Validators.required),
    producto: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    valor: new FormControl('', [Validators.required, Validators.min(1)])
  })

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

  validar(valor:string){
    console.log(valor)
  }
}