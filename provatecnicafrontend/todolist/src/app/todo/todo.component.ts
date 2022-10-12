import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import * as TodoService from '../todos.service'


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  tasks!: Todo[];

  newTaskTitle: string | undefined;

  constructor(){
    TodoService.get().then(
      (todos) => (this.tasks = todos.filter((todo) => !todo.completed))
    );
  }


  ngOnInit(): void {}

  async addTask() {
    if (this.newTaskTitle === "") {
      return alert ('non lasciarmi in bianco!');
    } else if (this.newTaskTitle === this.newTaskTitle) {
      const nTodo = await TodoService.add({
        title: this.newTaskTitle as string,
        completed: false,
      });
      this.tasks.push(nTodo);
      this.newTaskTitle = '';
    }
  }

  async completedTask(todo: Todo, i: number) {
    await TodoService.update({ completed: true }, todo.id);
    this.tasks.splice(i, 1);
  }
}








