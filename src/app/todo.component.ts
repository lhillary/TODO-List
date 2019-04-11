import { Component } from '@angular/core';

interface Task {
  task: String;
  completed: Boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  title: string = 'TODO List';
  
  tasks: Task[] = [
    {task: 'Take out trash cans.', completed: false},
    {task: 'Change cat litter.', completed: true},
    {task: 'Wash the car.', completed: false},
    {task: 'Buy groceries.', completed: false},
    {task: 'Put gas in car.', completed: true}
  ];
}
