import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PruebaAComponent } from './prueba-a/prueba-a.component';


@NgModule({
  declarations: [
    AppComponent,
    PruebaAComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
