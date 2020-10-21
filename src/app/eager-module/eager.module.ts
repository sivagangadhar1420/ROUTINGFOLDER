import { NgModule, Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { EagerModuleComponent } from './eager-module.component';
import { EagerRoutingModule } from './eager.routing';

@NgModule({
    imports:[CommonModule, EagerRoutingModule],
    declarations:[EagerModuleComponent],
    exports:[CommonModule, EagerModuleComponent]

})
export class EagerModule{}
