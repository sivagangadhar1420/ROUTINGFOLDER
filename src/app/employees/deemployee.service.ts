import { Inject, Injectable } from "@angular/core";
import { Cdepartment } from '../department/cdepartment';
import { Employee } from './demployee';
// import { Employee } from './demployee';

// import{Print} from '../print';
import {Print1} from '../print1';

@Injectable()
export class EmpService {
    ft1:Print1[]=[];
    emps:Employee[]=[];
     getEmployees():Employee[]{
        let restEmp=[new Employee( 1,"Raju", 30000),
            new Employee(11, "Raju1", 30000),
            new Employee(111, "Raju2", 30000)];
           return restEmp;
        
    }

        
    
    

}