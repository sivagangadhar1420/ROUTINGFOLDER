import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EagerModuleComponent } from './eager-module.component';


const routes: Routes = 
[
    {path:'eager', component:EagerModuleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EagerRoutingModule { }
