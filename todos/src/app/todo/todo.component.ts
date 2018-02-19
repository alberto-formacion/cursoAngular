import { TodoService } from './../services/todo-service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

  public nuevoTodo: Todo;

  constructor(
    private _todoService: TodoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.nuevoTodo = new Todo('', false, false, '');
    this._route.params.forEach((params: Params) => {
      this.nuevoTodo.nombre = params['nombreTodoParam'];
    });
  }

  guardarTodo() {
    this._todoService.guardarTodo(this.nuevoTodo);
    this.nuevoTodo = new Todo('', false, false, '');
  }

  anadirClases(todo: Todo) {
    const clases = {
      terminada: todo.terminado,
      importante: todo.importante

    };
    return clases;
  }

  terminarTarea(todo: Todo) {
    this._todoService.terminarTarea(todo);
  }

}
