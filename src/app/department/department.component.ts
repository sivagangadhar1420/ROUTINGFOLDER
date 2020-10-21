import { Component, OnInit } from '@angular/core';
import { Cdepartment } from './cdepartment';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  resEmps:Cdepartment[]= [];
  
    constructor() { 
    var res:Cdepartment[]= [{id:12, name:"Raju", salary:20000}, 
                            {id:1, name:"RajuKumar", salary:220000}];
    this.resEmps = res;
    

  }
  


  ngOnInit() {
  }

}
