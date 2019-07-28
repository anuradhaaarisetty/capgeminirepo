import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router}from '@angular/router';
import { IEmployee } from './employee interface';
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
employee:IEmployee;
  constructor(private employeeService:EmployeeService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    /* let empId=this.activatedRoute.snapshot.params['id'];
    this.employee=this.employeeService.getEmployeeById(empId); */
  }
  onClick(){
    this.router.navigate(['/employees']);
  }

}
