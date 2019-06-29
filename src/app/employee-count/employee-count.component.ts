import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent  {
 @Input()
  all: number;
  @Input()
male: number;
@Input()
female: number;

  constructor() { }



}
