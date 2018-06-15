import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Product } from '@app/models';
import { ShoppingCartService } from '@app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  public cartProducts: Product[];
  public form: FormGroup;

  private _snackbarConfig = {
    duration: 2000
  };

  constructor(
    private _shoppingCartService: ShoppingCartService,
    private _builder: FormBuilder,
    private _snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this._shoppingCartService
      .getProductList()
      .subscribe((products) => {
        this.cartProducts = products;
        this._setUpForm();
      });
  }

  public submit() {
    if (this.form.invalid) {
      return;
    }

    const selectedProducts = [];

    this.form.get('products').value.forEach((product) => {
      if (product.selected) {
        selectedProducts.push(product);
      }
    });

    if (selectedProducts.length < 1) {
      this._snackbar.open('Ошибка, выберите товар', '', this._snackbarConfig);
      return;
    }

    const data = {
      selectedProducts: selectedProducts,
      contacts: this.form.get('contactForm').value
    };

    console.log(data);
  }

  private _setUpForm() {
    this.form = this._builder.group({
      products: this._builder.array([]),
      contactForm: this._builder.group({
        name: ['', Validators.required],
        city: ['', Validators.required],
        phone: ['', Validators.required]
      })
    });

    const products = this.form.get('products') as FormArray;

    this.cartProducts.forEach((product) => {
      const group = this._builder.group({
        id: product.id,
        ammount: product.ammount,
        selected: false
      });

      products.push(group);
    });
  }

}
