import { Todo } from './../todo/todo';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Injectable()
export class TodoService {

  private listaTodos: Todo[] = new Array<Todo>();

  constructor() { }

  guardarTodo(nuevoTodo: Todo) {
    this.listaTodos = [...this.listaTodos, nuevoTodo];
  }

  terminarTarea(todo: Todo) {
    const todoIndex = this.listaTodos.indexOf(todo);
    const upadatedTodo = new Todo(todo.nombre, !todo.terminado, todo.importante, todo.color);

    this.listaTodos = [
      ...this.listaTodos.slice(0, todoIndex),
      upadatedTodo,
      ...this.listaTodos.slice(todoIndex + 1)
    ];
  }

}
