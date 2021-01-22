import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 onClick($event){
   console.log("se pulso ")
   console.log($event);
 }

 onChange($event){

   console.log($event.target.value);
 }

}
