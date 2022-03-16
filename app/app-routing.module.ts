import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Emplist1Component } from './emplist1/emplist1.component';
import { Emplist2Component } from './emplist2/emplist2.component';
import { Emplist3Component } from './emplist3/emplist3.component';
const routes: Routes = [
  {path: 'ep1', component: Emplist1Component},
  {path: 'ep2', component: Emplist2Component},
  {path: 'ep3', component: Emplist3Component},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [Emplist1Component,Emplist2Component,Emplist3Component]