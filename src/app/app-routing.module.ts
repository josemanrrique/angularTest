import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [{
  path: "",
  //component: AppComponent,
  children: [
    { path: '', redirectTo: 'famous', pathMatch: 'full'},
    { 
      path: 'famous', 
      loadChildren: () => import('./modules/famous/famous.module').then(m => m.FamousModule) 
    },
    { 
      path: 'profesors', 
      loadChildren: () => import('./modules/profesors/profesors.module').then(m => m.ProfesorsModule) 
    },
    { 
      path: 'students', 
      loadChildren: () => import('./modules/students/students.module').then(m => m.StudentsModule) 
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
