import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileNotFound } from './filenotfound';


const routes: Routes = 
[
    {path:'**', component:FileNotFound},

    
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FnfRouting { }
