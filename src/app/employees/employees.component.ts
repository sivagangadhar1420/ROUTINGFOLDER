import { Component, OnInit } from '@angular/core';

import { EmployeeDepartment } from './employeeDepartment';
import { EmpService } from './deemployee.service';
import { Cdepartment } from '../department/cdepartment';
import { Employee } from './demployee';
import { Print } from '../print';



@Component({
  selector: 'app-employees',
  providers:[EmpService],
  
  
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

dept:EmployeeDepartment[]= [];
emps1:Employee[]= [];
ft:Print[]=[];

 constructor(private emps:EmpService){
  var dpts:EmployeeDepartment[]= [{departmentId:1,departmentName:"FirstDepartment"},
                                  {departmentId:2, departmentName:"SecondDepartment"}]
      this.dept = dpts;
      console.log(this.dept);
      
  

  this.emps1= this.emps.getEmployees();
  console.log(this.emps1);
  

  
 }


}
