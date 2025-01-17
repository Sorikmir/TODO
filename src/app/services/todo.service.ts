import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Todo {
  id?: number;
  title: string;
  completed: boolean
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  updatetoTodo() {
    throw new Error('Method not implemented.');
  }
  
  private API_URL :string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.API_URL, todo);
  }
  
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.API_URL);
  }
  

  getTodo(id: number): Observable<Todo> {
    return this.http.get<Todo>('${this.API_URL}/${id}');
  }
  
  updateTodo(todo: Todo): Observable<Todo>{
    return this.http.put<Todo>('${this.API_URL}/${todo.id}', todo);
  }
  
  deleteTodo(id: number): Observable<any>{
    return this.http.delete<any>('${this.API_URL}/${id}');
  }

}
