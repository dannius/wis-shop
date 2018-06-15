import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Product } from '@app/models';
import { ProductService } from '@app/services/product.service';
import { WishCartService } from '@app/services/wish-cart.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductListResolver implements Resolve<Observable<Product[]>> {
  constructor(
    private _productService: ProductService,
    private _wishCartService: WishCartService
  ) {}

  resolve() {
    return this._productService
      .list()
      .switchMap(({ value }: any) => {
        this._wishCartService
          .fetch()
          .forEach((id) => {
            this._setWishProductById(value, id);
          });

        return Observable.of(value);
      });
  }

  private _setWishProductById(products: Product[], id) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        products[i].isWish = true;
      }
    }
  }
}
