import { ShoppingCartService } from '@app/services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '@app/models';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  public cartProducts: Product[];

  constructor(
    private _shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    this._shoppingCartService
      .getProductList()
      .subscribe((products) => {
        this.cartProducts = products;
      });
  }

}
