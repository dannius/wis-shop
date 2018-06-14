import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Product } from '@app/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html'
})
export class ProductDialogComponent implements OnInit {

  public product: Product;
  public ammountForm: FormGroup;
  public totalPrice: number;

  private snackbarConfig = {
    duration: 2500
  };

  constructor(
    private _dialogRef: MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _builder: FormBuilder,
    private _snackbar: MatSnackBar
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
  }

  public closeModal() {
    this._dialogRef.close();
  }

  public submit() {
    this.closeModal();
    this._snackbar.open(`Товар "${this.product.title}" добавлен в корзину`, '', this.snackbarConfig);

    // send to server
    this.product.ammount = this.ammountForm.value;
  }

}
