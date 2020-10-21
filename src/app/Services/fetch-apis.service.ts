import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpErrorResponse, HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fold } from '../Model/fold';
let hopts={
       headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
}

@Injectable({
  providedIn: 'root'
})
export class FetchApisService {

  // todoUrl="http://www.omdbapi.com/?i=tt3896198&apikey=a9e6f133&s=jurassic&page=1";
  // todoUrl="http://dummy.restapiexample.com/api/v1/employees";
  // todoUrl='https://jsonplaceholder.typicode.com/todos?_limit=5';
  todoUrl='https://jsonplaceholder.typicode.com/todos';
  toDoLimit='?_limit=5'

  getData(){
    return this.http.get(this.todoUrl);
  }

  getData1():Observable<Fold[]>{
    // return this.http.get<Fold[]>(this.todoUrl);
    return this.http.get<Fold[]>(`${this.todoUrl}${this.toDoLimit}`);
  }

  // serverSide
  toggleCompleted(td:Fold):Observable<any>{
    let url=`${this.todoUrl}/${td.id}`;
    return this.http.put(url,td, hopts)
  }

  
  deleteServerItems(td:Fold):Observable<Fold>{
    let url=`${this.todoUrl}/${td.id}`;
    return this.http.delete<Fold>(url, hopts);
  }
  addingTodos(todo:Fold):Observable<any>{
    return this.http.post<Fold>(this.todoUrl, todo,hopts)
    }
    
  constructor(private http:HttpClient) { }

}
