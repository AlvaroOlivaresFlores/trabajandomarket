import { Pipe, PipeTransform } from '@angular/core';
import { Service } from '../models/service';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(services: Array<Service>, searchText: string): any {
    if (services && searchText) {
      return services.filter((s) =>
        s.name.toLowerCase().includes(searchText.toLowerCase())
      );
    } else {
      return services;
    }
  }
}
