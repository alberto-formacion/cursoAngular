import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public nombreTodo: string;
  public importanteTodo: boolean;
  public listaTodos: Todo[] = new Array<Todo>();

  constructor() { }

  ngOnInit() {
    this.listaTodos.push(new Todo("Tarea fija", false, false));
  }

  guardarTodo(){
    const todo = new Todo(this.nombreTodo, false, this.importanteTodo);
    this.listaTodos.push(todo);
    this.nombreTodo = "";
    this.importanteTodo = false;
  }

  anadirClases(todo: Todo){
    let clases = {
      terminada: todo.terminado,
      importante: todo.importante

    }
    return clases;
  }

  terminarTarea(todo: Todo){
    todo.terminado = true;
  }

}
