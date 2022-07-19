import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Clickarea1Component } from './clickarea1/clickarea1.component';
import { ClickcompComponent } from './clickcomp/clickcomp.component';

const routes: Routes = [
  {path:"clickcomp",component:ClickcompComponent},
  {path:"",component:ClickcompComponent},
  {path:"clickcomp/:name/:name1",component:ClickcompComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
