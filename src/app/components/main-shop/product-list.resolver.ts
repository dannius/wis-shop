import { ProductService } from '@app/services/product.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Product } from '@app/models';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductListResolver implements Resolve<Observable<Product[]>> {
  constructor(
    private _productService: ProductService
  ) {}

  resolve() {
    return this._productService.list();
  }
}
