import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { PriorizarTodosPipe } from './pipes/priorizar-todos.pipe';
import { TodosTerminadosPipe } from './pipes/todos-terminados.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    PriorizarTodosPipe,
    TodosTerminadosPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
