import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/todo';

@Pipe({
  name: 'priorizarTodos'
})
export class PriorizarTodosPipe implements PipeTransform {

  transform(todos: Todo[]): Todo[] {
    return todos
            .filter(todo => !todo.terminado)
            .sort((a, b) => (b.importante && !a.importante) ? 1 : -1);
    /*return todos.filter(function(todo){
      return !todo.terminado;
    } );*/
  }

}
