import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ProductDialogComponent } from '@app/components/products/product-dialog/product-dialog.component';

@Component({
  selector: 'app-scale-image-dialog',
  templateUrl: './scale-image-dialog.component.html'
})
export class ScaleImageDialogComponent implements OnInit {

  public image: string;
  public title: string;

  constructor(
    public dialogRef: MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { }

  ngOnInit() {
    this.image = this.data.base64Image;
    this.title = this.data.title;
  }

}
