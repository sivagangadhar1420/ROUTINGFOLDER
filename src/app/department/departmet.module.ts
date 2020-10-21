import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './department.component';
import { DepartmentRouting } from './department.routing';


@NgModule({
    imports:[CommonModule,DepartmentRouting],
    declarations:[DepartmentComponent],
    exports:[CommonModule, DepartmentComponent]
})
export class DepartmentModule{

}