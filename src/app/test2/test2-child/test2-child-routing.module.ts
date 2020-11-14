import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test2ChildComponent } from './test2-child.component';

const routes: Routes = [
  {
    path: '',
    component: Test2ChildComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Test2ChildRoutingModule {}
