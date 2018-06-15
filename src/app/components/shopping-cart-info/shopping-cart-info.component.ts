import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '@app/services/shopping-cart.service';
import { Product } from '@app/models';

@Component({
  selector: 'app-shopping-cart-info',
  templateUrl: './shopping-cart-info.component.html'
})
export class ShoppingCartInfoComponent implements OnInit {

  public products: Product[];
  public totalPrice = 0;

  constructor(
    private _shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    this._shoppingCartService
      .getProductList()
      .subscribe((productList) => {
        this.products = productList;
        this.totalPrice = this.products
                            .reduce((prev, curr) => prev + curr.ammount * curr.price, 0);
      });
  }

}
