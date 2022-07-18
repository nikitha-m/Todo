import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [
    {
      sno: 1,
      title: "Studying",
      description: "Prepare for CIE",
      active: true
    },
    {
      sno: 2,
      title: "Play",
      description: "Level up to silver",
      active: true
    },
    {
      sno: 3,
      title: "Cook",
      description: "Learn new options",
      active: false
    },
    {
      sno: 4,
      title: "Go on solo trip with Rakshit",
      description: "Leave rakshit in washroom",
      active: true
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  deleteTask(task: Todo){
    const index = this.todos.indexOf(task);
    this.todos.splice(index, 1);
    console.log(task);
  }

}
