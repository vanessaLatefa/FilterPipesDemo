import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Employee';
  employees: any[];

  constructor() {
    this.employees = [
      { id: 'emp1', name: 'John', gender: 'Male', annualSalary: 5000, dateOfBirth: '1/25/1981' },
      { id: 'emp2', name: 'Dave', gender: 'Male', annualSalary: 5000, dateOfBirth: '25/1/1982' },
      { id: 'emp3', name: 'Vanessa', gender: 'Female', annualSalary: 5001, dateOfBirth: '2/26/1983' },
      { id: 'emp4', name: 'Jelena', gender: 'Female', annualSalary: 5002, dateOfBirth: '3/26/1984' },
      { id: 'emp5', name: 'Rimvydas', gender: 'Male', annualSalary: 5003, dateOfBirth: '27/4/1985' },

    ];
  }

  // getEmployees(): void {
  //   this.employees= [
  //     { id: 'emp1', name: 'John', gender: 'Male', annualSalary: 500, dateOfBirth: '6/25/1988' },
  //     { id: 'emp1', name: 'John', gender: 'Male', annualSalary: 500, dateOfBirth: '6/25/1988' },
  //     { id: 'emp1', name: 'John', gender: 'Male', annualSalary: 500, dateOfBirth: '6/25/1988' },
  //     { id: 'emp1', name: 'John', gender: 'Male', annualSalary: 500, dateOfBirth: '6/25/1988' },
  //     { id: 'emp1', name: 'John', gender: 'Male', annualSalary: 500, dateOfBirth: '6/25/1988' },

  //   ];
  // }
}
