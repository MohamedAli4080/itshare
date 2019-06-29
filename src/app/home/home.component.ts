import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  defaultview = 'certification';

  employees: any[] = [
  {Name: 'Mohamed', Age: 33, Gender: 'male' , DOB: '12/12/2015'},
  {Name: 'Ali', Age: 55, Gender: 'male' , DOB: '12/12/2015'},
  {Name: 'Eyad', Age: 22, Gender: 'male', DOB: '12/12/2015'},
  {Name: 'sho', Age: 55, Gender: 'Female', DOB: '12/12/2015'},
  {Name: 'shoo', Age: 55, Gender: 'Female' , DOB: '12/12/2015'},
  ];

  getTotalEmployeesCount(): number {
   return this.employees.length;
  }
  getFemaleCount(): number {
    return this.employees.filter(e => e.Gender === 'Female').length;
  }
  getMaleCount(): number {
    return this.employees.filter(e => e.Gender === 'male').length;
  }
  setview(resultview) {
    alert(resultview);
    this.defaultview = resultview;
  }





}
