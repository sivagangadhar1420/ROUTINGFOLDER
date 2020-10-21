import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  
})
export class LoggerService {
  
  log:any[]=[];
  logfunn1(fm:any){
    this.log.push(fm);
    console.log("Msg  ", fm);
    
  }

  constructor() { }
}
