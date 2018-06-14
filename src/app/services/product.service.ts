import '@app/shared/rx-operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@app/models';
import { environment } from '@env/environment';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProductService {

constructor(
  private _http: HttpClient
) { }

  public list(): Observable<Product[]> {
    return this._http
      .get(`${environment.apiUrl}/products.json`)
      .map((products: any) => {
        return Observable.of(
          products.map((product) => Product.fromJson(product))
        );
      })
      .catch((err) => Observable.of(err));
  }
}
