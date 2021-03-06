import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    console.log(value);
    if (arg === '' || arg.length < 1) return value;
    const resultProduct = [];
    for (const product of value) {
      if (product.product_name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultProduct.push(product);
      };
    };
    return resultProduct;
  }


}