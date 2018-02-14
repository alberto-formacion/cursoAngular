import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { PriorizarTodosPipe } from './pipes/priorizar-todos.pipe';
import { TodosTerminadosPipe } from './pipes/todos-terminados.pipe';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    PriorizarTodosPipe,
    TodosTerminadosPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
