import { WishCartService } from '@app/services/wish-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  public wishIds: number[];

  constructor(
    private _wishCartService: WishCartService
  ) { }

  ngOnInit() {
    this._wishCartService
      .wishIdsObservable()
      .subscribe((ids) => {
        this.wishIds = ids;
      });
  }

  public getWishTitle() {
    const count = this.wishIds.length.toString();
    const ch = count.slice(-1);

    if (ch === '0' && count.length === 1) {
      return `нет избранных товаров`;
    } else if (ch === '1') {
      return `${count} избранный товар`;
    } else {
      return `${count} избранных товара`;
    }
  }

}
