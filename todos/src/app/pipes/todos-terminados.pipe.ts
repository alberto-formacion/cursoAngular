import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/todo';

@Pipe({
  name: 'todosTerminados',
  pure: false
})
export class TodosTerminadosPipe implements PipeTransform {

  transform(todos: Todo[]): Todo[] {
    return todos
            .filter(todo => todo.terminado);
  }

}
