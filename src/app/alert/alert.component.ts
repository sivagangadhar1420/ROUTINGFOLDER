import { Component, OnInit } from '@angular/core';
import {EmployeeDepartment} from '../employees/employeeDepartment';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  // res1:EmployeeDepartment[]=[{departmentId:1, departmentName:"String"}]
  res2:EmployeeDepartment[]=[];
  

  constructor() { }

  ngOnInit() {
    this.res2= [{departmentId:1, departmentName:"String"},
                {departmentId:2, departmentName:"String1"}];
  }

}
