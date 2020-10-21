import { Component, OnInit, Input } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { AlertDangerComponent } from './alertdanger/alertdanger.component';
import { Router } from '@angular/router';
import { Fold } from './Model/fold';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'routingFolder';

  alert = AlertDangerComponent;
  toggleSwitch():void{
    if(this.alert == AlertDangerComponent){
       this.alert = AlertComponent;
       this.route.navigate(['sc'])
      } else{
        this.alert =  AlertDangerComponent ;
        this.route.navigate(['dc']);
     
      }

  }
  constructor(private route:Router){}
  
ngOnInit(){
   
}
}
