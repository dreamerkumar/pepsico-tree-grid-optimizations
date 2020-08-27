import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KeyfigureOneComponent } from './keyfigure-one/keyfigure-one.component';

const routes: Routes = [{
  path: 'keyfigure-one',
  component: KeyfigureOneComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
