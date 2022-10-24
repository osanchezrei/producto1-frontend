import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filter: string): any {
    if (!items) {
      return [];
    }
    return items.filter(it => {
      return it.toLowerCase().includes(filter);
    });
  }
}