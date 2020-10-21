import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees.component';
const routes: Routes = 
[
    {path:'emp', component:EmployeesComponent}, 
    {path:'emp/:empId/:deptId',component:EmployeesComponent},
];
    

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EmployeeRoutingModule{
    
}

