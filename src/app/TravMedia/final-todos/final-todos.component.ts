import { Component, OnInit } from '@angular/core';
import { BluePrintService } from 'src/app/Services/blue-print.service';
import { Fold } from 'src/app/Model/fold';
import { LoggerService } from 'src/app/Services/logger.service';
import { FetchApisService } from 'src/app/Services/fetch-apis.service';

@Component({
  selector: 'app-final-todos',
  providers:[BluePrintService],
  templateUrl: './final-todos.component.html',
  styleUrls: ['./final-todos.component.css']
})
export class FinalTodosComponent implements OnInit {
  res1:Fold[];

fres:any="";
constructor(private http:BluePrintService, private ls:LoggerService,private lss:FetchApisService) {
    var res123=this.ls.logfunn1("YEs i am Here Bro");
    this.fres = res123;
      }
    
      
  // rest:any="";
  getResults(){
    return this.lss.getData1().subscribe((res1)=>{
        console.log("data", res1);
        this.res1=res1;
        // this.res1=this.rest;
      })
    }
    getPrint(){
      return this.lss.getData().subscribe((mk)=>{
        // console.log("PrintOutData", mk);
      })
    }
    deleteItms(res1:Fold){
          // Removing From UI
      this.res1 = this.res1.filter(t => t.id !== res1.id);
      console.log("Deleting");

      // Removing From Srver
      this.lss.deleteServerItems(res1).subscribe();
      }

    addTodos(todo:Fold){
      this.lss.addingTodos(todo).subscribe((todo)=>{
        this.res1.push(todo);
      });

    }
      

    
      
  ngOnInit() {
    this.getPrint();
    this.getResults();
    this.res1=this.http.getEmployees();
    
    }
  }
    



