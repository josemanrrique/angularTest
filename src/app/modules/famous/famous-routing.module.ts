import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamousComponent } from './famous.component';

const routes: Routes = [{
  path: "",
  component: FamousComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamousRoutingModule { }
