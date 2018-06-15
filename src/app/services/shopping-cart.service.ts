import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Product } from '@app/models';

@Injectable()
export class ShoppingCartService {

  private _productList = new BehaviorSubject<Product[]>([]);

  constructor() { }

  public setProductList(products: Product[]) {
    this._productList.next(products);
  }

  public getProductList(): Observable<Product[]> {
    return this._productList.asObservable();
  }

}
