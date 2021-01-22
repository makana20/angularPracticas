import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludosComponent } from './saludos/saludos.component';
import { PadreComponent } from './padre/padre.component';
import { Hijo1Component } from './hijo1/hijo1.component';
import { Hijo2Component } from './hijo2/hijo2.component';
import { EventosComponent } from './eventos/eventos.component';



@NgModule({
  declarations: [
    AppComponent,
    SaludosComponent,
    PadreComponent,
    Hijo1Component,
    Hijo2Component,
    EventosComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
