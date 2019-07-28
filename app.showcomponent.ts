import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './app.employeeservice';
@Component({
    selector:'show-app',
    templateUrl:'app.show.html'
})
export class ShowComponent implements OnInit{

    constructor(private employeeService:EmployeeService ){}
    empdata:any[]=[];
    ngOnInit(){
        this.employeeService.getAllEmployee().subscribe((data:any)=>this.empdata=data);
    }
}