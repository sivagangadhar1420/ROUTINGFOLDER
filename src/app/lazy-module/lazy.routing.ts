import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyModuleComponent } from './lazy-module.component';
import { DemoComponent } from './demo';


const routes: Routes = 
[
    {path:'', component:LazyModuleComponent},
    {path:'demo', component:DemoComponent}
    
  
    
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRouting { }
