import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})

export class DateCountPipe implements PipeTransform {
  
  transform(value: any): number {
    let today:Date = new Date(); //get current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    return null;
  }
}
