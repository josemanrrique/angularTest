import { NgModule } from '@angular/core';

import { FamousRoutingModule } from './famous-routing.module';
import { FamousComponent } from './famous.component';
import { SharedModule } from '../../core/shared/shared.module';


@NgModule({
  declarations: [
    FamousComponent
  ],
  imports: [
    SharedModule,
    FamousRoutingModule
  ]
})
export class FamousModule { }
