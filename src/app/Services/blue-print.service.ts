import { Injectable } from '@angular/core';
import{Fold} from '../Model/fold';

@Injectable({
  providedIn: 'root'
})
export class BluePrintService {
  getEmployees():Fold[]{
    let cls=[
              {id:1, title:"Arr", name:"Raju1", completed:true},
              {id:12, title:"Arr1", name:"Raju2", completed:false},
              {id:13, title:"Arr2", name:"Raju3", completed:true},
            ]
          return cls;
        }
        constructor() { }
      }
              
              


