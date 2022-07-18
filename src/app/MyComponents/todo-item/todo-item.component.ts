import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  constructor() { }
  @Input()
  task: Todo = new Todo;

  @Output() taskDelete: EventEmitter<Todo> = new EventEmitter;
  ngOnInit(): void {
  }

  onClick(task: Todo){
    this.taskDelete.emit(task);
    alert("The task has been deleted");
  }

}
