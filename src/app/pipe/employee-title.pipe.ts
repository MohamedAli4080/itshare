import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeTitle'
})
export class EmployeeTitlePipe implements PipeTransform {

  transform(value: any, gender: string): string {
    if (gender.toLowerCase() === 'male') {
      return 'MR.' + value;
    } else {
      return 'MS.' + value;
    }
    return null;
  }

}
