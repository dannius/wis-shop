import { WishCartService } from '@app/services/wish-cart.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Product } from '@app/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShoppingCartService } from '@app/services/shopping-cart.service';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html'
})
export class ProductDialogComponent implements OnInit {

  public product: Product;
  public ammountForm: FormGroup;
  public totalPrice: number;

  private _wishIds: number[];
  private _snackbarConfig = {
    duration: 2500
  };

  constructor(
    private _dialogRef: MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _builder: FormBuilder,
    private _snackbar: MatSnackBar,
    private _shoppingCartService: ShoppingCartService,
    private _wishCartService: WishCartService
  ) { }

  ngOnInit() {
    this.product = this._data.product;
    this.totalPrice = this.product.price;

    this.ammountForm = this._builder.group({
      ammount: [1, Validators.min(1)]
    });

    this.ammountForm
      .get('ammount')
      .valueChanges
      .subscribe((num) => {
        this.totalPrice = num > 0 ? this.product.price * num : 0;
      });

    this._wishIds = this._wishCartService.wishIds;
  }

  public closeModal() {
    this._dialogRef.close();
  }

  public submit() {

    if (this.ammountForm.invalid) {
      return;
    }

    // send to server
    this._shoppingCartService
    .getProductList()
    .take(1)
    .subscribe((products: Product[]) => {
      const existProduct = products.find((product) => product.id === this.product.id);
      const ammountIfExist = existProduct ? existProduct.ammount : null;

      this.product.ammount = this.ammountForm.value.ammount;
      products = this._updateCartProducts(products, ammountIfExist);
      this._shoppingCartService.setProductList(products);

      this.closeModal();
      this._removeFromWishIfExist();
      this._snackbar.open(`Товар "${this.product.title}" добавлен в корзину`, '', this._snackbarConfig);
    });

  }

  private _removeFromWishIfExist() {
    this._wishCartService.removeId(this.product.id);
    this.product.isWish = false;
  }

  private _updateCartProducts(products: Product[], ammountIfExist: number): Product[] {
    if (ammountIfExist) {
      this.product.ammount = this.product.ammount + ammountIfExist;
      products = products.map(product => product.id === this.product.id ? this.product : product);
    } else {
      products.push(this.product);
    }

    return products;
  }

}
