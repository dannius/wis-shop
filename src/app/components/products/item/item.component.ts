import { ScaleImageDialogComponent } from './../scale-image-dialog/scale-image-dialog.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProductDialogComponent } from '@app/components/products/product-dialog/product-dialog.component';
import { Product } from '@app/models';

@Component({
  selector: 'app-product-item',
  templateUrl: './item.component.html'
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  public showCartDialog() {
    this.dialog.open(ProductDialogComponent, {
      data: {
        product: this.product
      }
    });
  }

  public showScaleImageDialog() {
    this.dialog.open(ScaleImageDialogComponent, {
      data: {
        base64Image: this.product.image,
        title: this.product.title
      }
    });
  }

}
