import { NgModule } from "@angular/core";
import { LazyModuleComponent } from './lazy-module.component';
import { CommonModule } from '@angular/common';
import{LazyRouting} from './lazy.routing';
import { DemoComponent } from './demo';



@NgModule({
    imports:[CommonModule, LazyRouting],
    declarations:[LazyModuleComponent, DemoComponent],
    exports:[CommonModule, LazyModuleComponent, DemoComponent]

})
export class LazyModule{
    
}