import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateAge',
  standalone: true
})
export class CalculateAgePipe implements PipeTransform {

  transform(value: string): number {

    
    const birthDate = new Date(value);

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in years
    const age = currentDate.getFullYear() - birthDate.getFullYear();

    // Check if the birthday has occurred this year
    if (currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
      return age - 1;
    } else {
      return age;
    }


  }

}
