import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
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

  constructor(
    public dialogRef: MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private builder: FormBuilder
  ) { }

  ngOnInit() {
    this.product = this.data.product;
    this.totalPrice = this.product.price;

    this.ammountForm = this.builder.group({
      ammount: [1, Validators.min(1)],
    });

    this.ammountForm
      .get('ammount')
      .valueChanges
      .subscribe((num) => {
        this.totalPrice = num > 0 ? this.product.price * num : 0;
      });
  }

}
