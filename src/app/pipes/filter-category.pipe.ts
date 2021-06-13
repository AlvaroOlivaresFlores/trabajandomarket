import { Pipe, PipeTransform } from '@angular/core';
import { Service } from '../models/service';

@Pipe({
  name: 'filterCategory',
})
export class FilterCategoryPipe implements PipeTransform {
  transform(services: Array<Service>, category: string): any {
    if (category === 'NONE' || category === '') {
      return services;
    } else if (services && category) {
      return services.filter((s) => s.category.toString() === category);
    }
  }
}
