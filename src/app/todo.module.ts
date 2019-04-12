import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TodoComponent } from './todo.component';
import { AutoFocusDirective } from './auto-focus.directive';

@NgModule({
  declarations: [
    TodoComponent,
    AutoFocusDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [TodoComponent]
})
export class TodoModule { }
