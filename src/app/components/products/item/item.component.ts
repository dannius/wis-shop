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

  private _snackbarConfig = {
    duration: 2000,
  };

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

  public removeFromWishes(id: number) {
    this._wishCartService
      .removeId(id)
      .subscribe((status) => {
        if (status) {
          this._snackbar.open('Товар удален из списка желаний', '', this._snackbarConfig);
          this.product.isWish = false;
        }
      });
  }

  public setAsWishes(id: number) {
    this._wishCartService
      .updateWithId(id)
      .subscribe((status) => {
        if (status) {
          this._snackbar.open('Товар добавлен в список желаний', '', this._snackbarConfig);
          this.product.isWish = true;
        } else {
          this._snackbar.open('Что-то пошло не так', '', this._snackbarConfig);
        }
      });
  }

}
