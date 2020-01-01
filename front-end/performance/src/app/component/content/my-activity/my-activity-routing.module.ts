import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyActivityComponent } from './my-activity.component';

const routes: Routes = [{ path: '', component: MyActivityComponent, data: {title: 'My Activity'}}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyActivityRoutingModule { }
