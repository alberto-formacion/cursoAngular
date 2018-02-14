import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public listaTodos: Todo[] = new Array<Todo>();
  public nuevoTodo: Todo;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.nuevoTodo = new Todo("", false, false, "");
    this._route.params.forEach((params: Params) => {
      this.nuevoTodo.nombre = params['nombreTodoParam'];
    });
    this.listaTodos.push(new Todo("Tarea fija", false, false,""));
  }

  guardarTodo(){
    this.listaTodos.push(this.nuevoTodo);
    this.nuevoTodo = new Todo("", false, false, "");
  }

  anadirClases(todo: Todo){
    let clases = {
      terminada: todo.terminado,
      importante: todo.importante

    }
    return clases;
  }

  terminarTarea(todo: Todo){
    todo.terminado = !todo.terminado;
  }

}
