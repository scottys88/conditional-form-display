import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormPageTwoComponent } from './form-page-two/form-page-two.component';
import { FormPageComponent } from './form-page/form-page.component';


const routes: Routes = [
  { path: '',  pathMatch: 'full', redirectTo: '/page-one' },
  { path: 'page-one', component: FormPageComponent },
  { path: 'page-two', component: FormPageTwoComponent }
]
  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
