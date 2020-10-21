import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
// import { FileNotFound } from './filenotfound';
import { EmployeeRoutingModule } from './employee.route.module';
// import { ShowAlert } from '../department/customdirective';

@NgModule({
    imports:[CommonModule, EmployeeRoutingModule],
    declarations:[EmployeesComponent],
    exports:[CommonModule, EmployeesComponent]

})
export class EmployeeModule{

}