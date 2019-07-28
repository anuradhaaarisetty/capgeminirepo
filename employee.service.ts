import { Injectable } from '@angular/core';
import { IEmployee } from './employee interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees:IEmployee[]=[

    {id:1001,name:"Mark",gender:"Male",age:23,salary:34000},

    {id:1002,name:"Sara",gender:"Female",age:22,salary:67000},

    {id:1003,name:"Mary",gender:"Female",age:33,salary:56000},

    {id:1004,name:"James",gender:"Male",age:51,salary:98000},

    {id:1005,name:"Sam",gender:"Male",age:23,salary:78000}

  ];
  constructor() { }
  getEmployees():IEmployee[]{
    return this.employees;
  }
 /*  getEmployeeById(id):IEmployee{
    return(this.employees.filter(emp=>emp.id==id))[0];
  } */
  addEmployee(emp){
    this.employees.push(emp);
  }
}
