import { HttpClient } from '@angular/common/http';
import { Todo } from './../todo/todo';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService {

  private listaTodos: Todo[] = new Array<Todo>();

  constructor(
    private _http: HttpClient
  ) { }

  obtenerTodos() {
    this._http.get<Todo[]>('http://localhost:8080/api/todos').subscribe(todos => {
      this.listaTodos = todos;
    });
  }

  guardarTodo(nuevoTodo: Todo) {
    this._http.post('http://localhost:8080/api/todos', nuevoTodo).subscribe(resultado =>{
      this.obtenerTodos();
    });
    // this.listaTodos = [...this.listaTodos, nuevoTodo];
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
