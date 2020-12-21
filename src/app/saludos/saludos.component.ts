import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludos',
  templateUrl: './saludos.component.html',
  styleUrls: ['./saludos.component.css']
})
export class SaludosComponent implements OnInit {

  mensaje: string;
  idenParrafo: string;
  identifInput: string;

  constructor() { 
    this.mensaje = 'saludos a todos';
    this.idenParrafo = 'parrafoPrincipal';
    this.identifInput = 'text';

    setTimeout(()=> {
      this.mensaje = 'OTRO MENSAJE';
      this.idenParrafo = 'main';
      this.identifInput = 'password';

    }, 3000);

  }

  ngOnInit(): void {
  }


  mostrarSaludo():string {
    return'saludos desde el metodo';
  }

}
