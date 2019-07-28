import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployee } from './employee interface';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit() {
  }
  onSubmit(form:IEmployee){
    this.employeeService.addEmployee(form);
    this.router.navigate(['/employees']);
}
/* onClick(){
  this.router.navigate(['/employees']);
}
 */
}
