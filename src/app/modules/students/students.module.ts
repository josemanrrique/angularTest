import { NgModule } from '@angular/core';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { SharedModule } from '../../core/shared/shared.module';


@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    SharedModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
