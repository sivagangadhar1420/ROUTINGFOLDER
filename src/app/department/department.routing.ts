

import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department.component';

const routes: Routes = 
[
    {path:'dept', component:DepartmentComponent}, 
    {path:'emp/:empId/:deptId',component:DepartmentComponent},
];
    

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DepartmentRouting{
    
}

