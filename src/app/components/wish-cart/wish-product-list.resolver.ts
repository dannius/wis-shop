import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Product } from '@app/models';
import { ProductService } from '@app/services/product.service';
import { WishCartService } from '@app/services/wish-cart.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WishProductListResolver implements Resolve<Observable<Product[]>> {
  constructor(
    private _productService: ProductService,
    private _wishCartService: WishCartService
  ) {}

  resolve() {
    return this._productService
      .list()
      .switchMap(({ value }: any) => {
        const wishIds = this._wishCartService.fetch();
        const wishedProducts = this._getWishedProducts(value, wishIds);
        return Observable.of(wishedProducts);
      });
  }

  private _getWishedProducts(products: Product[], wishIds: any[]): Product[] {
    return wishIds.map((wishId) => {
      return products.find((product) => {
        if (product.id === wishId) {
          product.isWish = true;
          return true;
        }

        return false;
      });
    });
  }
}
