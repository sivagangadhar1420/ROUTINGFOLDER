import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FnfRouting } from './fnf.routing';
import { FileNotFound } from './filenotfound';

@NgModule({
    imports:[CommonModule,FnfRouting],
    declarations:[FileNotFound],
    exports:[CommonModule]
})
export class FnfModule{

}