import { WishCartService } from '@app/services/wish-cart.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '@app/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wish-cart',
  templateUrl: './wish-cart.component.html'
})
export class WishCartComponent implements OnInit {

  public wishProducts: Product[];

  constructor(
    private _route: ActivatedRoute,
    private _wishCartService: WishCartService
  ) { }

  ngOnInit() {
    this.wishProducts = this._route.snapshot.data.wishList;

    this._wishCartService
      .wishIdsObservable()
      .subscribe((ids) => {
        if (ids !== null) {
          this.wishProducts = this.wishProducts
                                .filter((product) => ids.includes(product && product.id));
        }
      });
  }
}
