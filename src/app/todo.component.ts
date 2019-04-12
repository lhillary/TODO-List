import { Component, ViewChild, ElementRef, AfterViewInit, Directive, Input } from '@angular/core';
import { NonNullAssert } from '@angular/compiler';

interface Task {
  task: String;
  completed: boolean;
  hide: boolean;
  editMode: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  title: string = 'TODO List';
  taskInput: string = null;
  savedTask: string = null;
  i: number;
  filterKey: string = null;
  editMode: boolean = false;

  tasks: Task[] = [
    {task: 'Take out trash cans.', completed: false, hide: false, editMode: false},
    {task: 'Change cat litter.', completed: true, hide: false, editMode: false},
    {task: 'Wash the car.', completed: false, hide: false, editMode: false},
    {task: 'Buy groceries.', completed: false, hide: false, editMode: false},
    {task: 'Put gas in car.', completed: true, hide: false, editMode: false}
  ];

  getTask = (evt) => {
    this.taskInput = evt.target.value;
  }

  addTask = () => {
    this.savedTask = this.taskInput;
    let newTask = {task: this.savedTask, completed: false, hide: false, editMode: false}
    this.tasks.push(newTask);
    this.taskInput = null;
  }

  removeTask = (i) => {
    this.tasks.splice(i, 1);
  }

  completeTask = (i) => {
    this.tasks[i].completed = true;
  }

  filterList = (evt) => {
    this.filterKey = evt.target.value;
    let filter = this.filterKey.toUpperCase();
    for (let i = 0; i < this.tasks.length; i++) {
      let text = this.tasks[i].task;
      if (text.toUpperCase().indexOf(filter) > -1) {
        this.tasks[i].hide = false;
      } else {
        this.tasks[i].hide = true;
      }
    }
  }

  editTask = (i) => {
    this.tasks[i].editMode = true;
  }

  save = (i) => {
    this.tasks[i].editMode = false;
  }
}
