import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn:'root'
})
export class EmployeeService{

    constructor(private http:HttpClient){

    }
    getAllEmployee(){
        return this.http.get("http://localhost:6060/emplist/getalldata");
    }
    addEmployee(data:any){
//let input=new FormData();
  //     input.append("empId",data.eid);
    //    input.append("empName",data.ename);
      //  input.append("empSalary",data.empsalary);
let input={"empId":data.eid,"empName":data.ename,"empSalary":data.esalary};

        return this.http.post("http://localhost:6060/emplist/adddata",input);
    }
deleteEmployee(){
    return this.http.delete("http://localhost:6060/emplist/deldata/eid");
}
//updateEmployee(){

//return this.http.post("http://localhost:6060/emplist/updatedata/1002/23");
//}
   
}