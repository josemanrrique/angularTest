import { NgModule } from '@angular/core';

import { ProfesorsRoutingModule } from './profesors-routing.module';
import { ProfesorsComponent } from './profesors.component';
import { SharedModule } from '../../core/shared/shared.module';


@NgModule({
  declarations: [
    ProfesorsComponent
  ],
  imports: [
    ProfesorsRoutingModule,
    SharedModule
  ]
})
export class ProfesorsModule { }
