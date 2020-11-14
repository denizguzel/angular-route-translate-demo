import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { Test2Component } from './test2.component';
import { Test2Guard } from './test2.guard';
import { Test2Resolver } from './test2.resolver';

const routes: Routes = [
  {
    path: '',
    component: Test2Component,
    resolve: [Test2Resolver],
    children: [
      {
        path: 'child',
        loadChildren: () =>
          import('./test2-child/test2-child.module').then(
            (mod) => mod.Test2ChildModule
          ),
        canActivate: [Test2Guard],
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes),
  ],
  exports: [RouterModule, LocalizeRouterModule],
  providers: [Test2Resolver, Test2Guard],
})
export class Test2RoutingModule {}
