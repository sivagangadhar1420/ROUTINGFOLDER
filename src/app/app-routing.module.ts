import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileNotFound } from './lazy-module/filenotfound';
import { HomeComponent } from './homecomponent';
import { EagerModuleComponent } from './eager-module/eager-module.component';
import { LazyModuleComponent } from './lazy-module/lazy-module.component';
import { DemoComponent } from './lazy-module/demo';
import { AlertComponent } from './alert/alert.component';
import { AlertDangerComponent } from './alertdanger/alertdanger.component';


const routes: Routes = 
[
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'sc', component:AlertComponent},
  {path:'dc', component:AlertDangerComponent},
  // {path:'lazy', loadChildren:'../app/lazy-module/lazy.module#LazyModule'},
  {path:'lazy', loadChildren:'./lazy-module/lazy.module#LazyModule'}
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
