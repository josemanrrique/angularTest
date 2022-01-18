import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule
  ],
  exports:[
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule
  ]
})
export class SharedModule { }
