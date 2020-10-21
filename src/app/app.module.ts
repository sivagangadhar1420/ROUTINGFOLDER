import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { AlertDangerComponent } from './alertdanger/alertdanger.component';
import { ShowAlert } from './department/customdirective';
import { HomeComponent } from './homecomponent';


import { EmployeeModule } from './employees/employe.module';
import { DepartmentModule } from './department/departmet.module';
import { EagerModule } from './eager-module/eager.module';
import { LazyModule } from './lazy-module/lazy.module';
import { FnfModule } from './lazy-module/fnf.module';
import { MediaFolderComponent } from './Trav/media-folder/media-folder.component';
import { TodosComponent } from './Trav/todos/todos.component';
import { Todos123Component } from './TravMedia/todos123/todos123.component';
import { FinalTodosComponent } from './TravMedia/final-todos/final-todos.component';
import { BluePrintService } from './Services/blue-print.service';
import {HttpClientModule} from '@angular/common/http';
import { FetchApisService } from './Services/fetch-apis.service';
import { HeadersComponent } from './headers/headers.component';
import {FormsModule} from '@angular/forms';
import { AddTodosComponent } from './add-todos/add-todos.component';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    AlertDangerComponent,
    ShowAlert, 
    HomeComponent, MediaFolderComponent, TodosComponent, Todos123Component, FinalTodosComponent, HeadersComponent, AddTodosComponent,
    
  ],
  entryComponents:[AlertComponent, AlertDangerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    EmployeeModule,
    DepartmentModule, 
    EagerModule,
    LazyModule,
    FnfModule, HttpClientModule,
    FormsModule
    
  ],
  providers: [BluePrintService,FetchApisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
