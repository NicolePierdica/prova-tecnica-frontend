import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import * as TodoService from '../todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})


export class CompletedComponent {
  tasks!: Todo[];

  newTaskTitle: string | undefined;
  constructor() {
    TodoService.get().then(
      (todos) => (this.tasks = todos.filter((todo) => todo.completed))
    );
  }


ngOnInit(): void {}

}
