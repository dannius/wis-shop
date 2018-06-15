import { Component, Input } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ProductDialogComponent } from '@app/components/products/product-dialog/product-dialog.component';
import { ScaleImageDialogComponent } from '@app/components/products/scale-image-dialog/scale-image-dialog.component';
import { Product } from '@app/models';
import { WishCartService } from '@app/services/wish-cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './item.component.html'
})
export class ProductItemComponent {

  @Input() product: Product;

  constructor(
    private _dialog: MatDialog,
    private _wishCartService: WishCartService,
    private _snackbar: MatSnackBar
  ) { }

  public showCartDialog() {
    this._dialog.open(ProductDialogComponent, {
      data: {
        product: this.product
      }
    });
  }

  public showScaleImageDialog() {
    this._dialog.open(ScaleImageDialogComponent, {
      data: {
        base64Image: this.product.image,
        title: this.product.title
      }
    });
  }

  public setAsWishes(id: number) {
    const snackbarConfig = {
      duration: 2000,
    };

    this._wishCartService
      .updateWithId(id)
      .subscribe((status) => {
        if (status) {
          this._snackbar.open('Товар добавлен в список желаний', '', snackbarConfig);
          this.product.isWish = true;
        } else {
          this._snackbar.open('Не успел сделать удаление из списка желаний', '', snackbarConfig);
        }
      });
  }

}
