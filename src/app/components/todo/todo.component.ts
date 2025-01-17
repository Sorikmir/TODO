import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../../services/todo.service';
import { JsonPipe, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-todo',
  imports: [NgForOf, FormsModule,
    MatCheckboxModule],
 
    templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {
deleteTodo(arg0: number) {
throw new Error('Method not implemented.');
}
    todos: Todo[] = [];
    newTodo: string = '';
    constructor(private todoService: TodoService){}
  
    ngOnInit(): void {
   this.getTodos();
  }

  private getTodos() {
  this.todoService.getTodos().subscribe(
    data => this.todos = data
 )
 }
 addTodo(){
     if (this.newTodo.trim()) {
       const todo: Todo = {
           title: this.newTodo,
           completed: false
       } 
       this.todoService.createTodo(todo).subscribe(
         item => {
          console.log(item);
          this.newTodo = '';
         }
       )
     }
     }

  updateTodo(todo: Todo) {
  this.todoService.updateTodo(todo).subscribe(
    data => console.log(data) 
 )
 }

 deleteteTodo(id: number | undefined) {
  
  if (id) 
    {this.todoService.deleteTodo(id).subscribe(
    data => console.log(data) )
}

 }
 
}
