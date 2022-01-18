import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesorsComponent } from './profesors.component';

const routes: Routes = [{
  path: "",
  component: ProfesorsComponent
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesorsRoutingModule { }
