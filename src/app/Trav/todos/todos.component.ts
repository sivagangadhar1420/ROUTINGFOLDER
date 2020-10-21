import { Component, OnInit, Input } from '@angular/core';
import { Fold } from 'src/app/Model/fold';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() inpt:Fold;

  setClasses(){
    let cls=
          { 
             inpt1:true, 'name1':this.inpt.completed 
            };
          return cls;
                }
    
    setStyles(){
      let styls={   sts:true,
                  'font':this.inpt.completed ? 'bold' : 'italic'
      }
      return styls;
    }
    onToggle(sel:any){
      // console.log("toggle");
      sel.completed = !sel.completed;

    }
      
      
    deleteFunn(td:any){
      console.log("Deleted");
      
    }
 

  constructor() { }

  ngOnInit() {
  }

}
