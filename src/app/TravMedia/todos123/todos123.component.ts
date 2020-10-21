import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Fold } from 'src/app/Model/fold';
import { LoggerService } from 'src/app/Services/logger.service';
import { FetchApisService } from 'src/app/Services/fetch-apis.service';

@Component({
  selector: 'app-todos123',
  providers:[FetchApisService],
  templateUrl: './todos123.component.html',
  styleUrls: ['./todos123.component.css']
})
export class Todos123Component implements OnInit {
@Input() inpt:Fold;
@Output() deleteTodos:EventEmitter<Fold>= new EventEmitter();

        setClasses(){
              let cls={cl:true, 'number1':this.inpt.completed};
              return cls;
              }
              
        setStyles(){
              let stls={pt:true, 'font':this.inpt.completed ? 'italic' : 'bold'};
              return stls;
                }
                
          toggleCls(inpt){
               inpt.completed = !inpt.completed;
               this.ls1.toggleCompleted(inpt).subscribe((inpt)=>{
                     console.log("Data is ",inpt);
                  })
            }

            deleteTodo(inpt){
                  this.deleteTodos.emit(inpt);          
                  console.log("delete");
                  
            }
                  
            fres:any="";
                constructor(private ls:LoggerService, private ls1:FetchApisService) {
                this.fres = this.ls.logfunn1("Msg here i am geetig");
              }

  
        // ms:any=""
        // ms1:any="";

            // getdata1(){
                  //   this.ls1.getData1().subscribe((fp)=>{
                  //     console.log("Data111", fp);
                  //     this.otpt = fp;
                  //       this.result = this.otpt;
                  //     })
                  //   }
  

            // getData(){
                //     this.ls1.getData().subscribe((res)=>{
                //       console.log("Data22222", res);
                //       this.ms= res;
                //       this.ms1 = this.ms;
                //     })
                //   }

        ngOnInit() {
      //  this.getData();
      //  this.getdata1();
      

      

      
      }
    }

