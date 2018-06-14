import { Component, OnInit, Input } from '@angular/core';
import { Product } from '@app/models';

@Component({
  selector: 'app-product-list',
  templateUrl: './list.component.html'
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[];

  constructor() { }

  ngOnInit() {
  }

}
