import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { FormControl, FormsModule, FormGroup } from '@angular/forms';
import { ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Toma de pedidos';

  clientes = [
    { id: 0, nombre: 'Juan',  apellido: 'Perez',     edad: 25 },
    { id: 1, nombre: 'Maria', apellido: 'Gomez',     edad: 30 },
    { id: 2, nombre: 'Pedro', apellido: 'Garcia',    edad: 35 },
    { id: 3, nombre: 'Laura', apellido: 'Fernandez', edad: 40 }
  ];

  pedidosForm = new FormGroup({ 
    vendedor: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    cliente: new FormControl('', Validators.required)
  });

  onSubmit() {  
    alert(JSON.stringify(this.pedidosForm.value));
  } 

}