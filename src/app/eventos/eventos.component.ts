import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  mensaje:string;

  constructor() { 
    this.mensaje = 'Mensaje Inicial';
  }

  ngOnInit(): void {
  }

 onClick($event){
   console.log("se pulso ")
   console.log($event);
 }

 onChange($event){

   console.log($event.target.value);
 }

 onMouseEnter(){

  //console.log("Entro al div");
  this.mensaje = 'Estoy en el div';
 }

 onMouseOut(){
  this.mensaje = 'Saliendo del div';
 }

 onChangeInput($event){
  console.log($event.target.value);
 }

 onInput($event){

  console.log($event.target.value);

  this.mensaje = $event.target.value;
 }

 onFocus(){
   console.log("recibe foco");

 }

 onBlur(){
  console.log("pierde el foco");
 }

}
