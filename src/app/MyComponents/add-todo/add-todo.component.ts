import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  title: string = "";
  description: string = "";
  constructor() { }
  @Output() addTask: EventEmitter<Todo> = new EventEmitter;
 
  onSubmit(){
    const task = {
      sno: 8,
      title: this.title,
      description: this.description,
      active: true
    }
    this.addTask.emit(task);
  }
  ngOnInit(): void {
  }
}
