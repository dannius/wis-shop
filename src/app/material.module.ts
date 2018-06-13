import { NgModule } from '@angular/core';

import {
  MatIconModule,
  MatToolbarModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
})
export class MaterialModule { }
