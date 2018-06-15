import { ProductService } from '@app/services/product.service';
import { Product } from '@app/models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-shop',
  templateUrl: './main-shop.component.html'
})
export class MainShopComponent implements OnInit {

  public products: Product[];

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.products = this.route.snapshot.data.productList;
  }

}
