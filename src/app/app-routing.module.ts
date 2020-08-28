import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobStatusComponent } from './job-status/job-status.component';

const routes: Routes = [{
  path: 'job-status',
  component: JobStatusComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
