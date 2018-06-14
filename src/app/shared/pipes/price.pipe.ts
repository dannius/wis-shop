import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number | string): any {
    return `${value}`
            .split('')
            .reverse()
            .map((price, index) => (index + 1) % 3 === 0 ? ` ${price}` : `${price}`)
            .reverse()
            .join('');
  }

}
