import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Fold } from '../Model/fold';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css']
})
export class AddTodosComponent implements OnInit {
  @Output() addTodo:EventEmitter<any>=new EventEmitter();
  id:number;
  userId:number;
  title:string;
  onSubmit(){
    
    let todo={
      id:this.id, 
      userId:this.userId ,
      title:this.title, 
       completed:false
      };
      this.addTodo.emit(todo);
    }


  

  constructor() { }

  ngOnInit() {
  }

}
