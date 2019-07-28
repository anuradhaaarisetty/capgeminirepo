import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee interface';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
employees:IEmployee[];
  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
  this.employees=this.employeeService.getEmployees();
  }
  Delete(employee1){
      let a=this.employees.indexOf(employee1);
      this.employees.splice(a,1);
  }
}
