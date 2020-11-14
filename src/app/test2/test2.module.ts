import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Test2RoutingModule } from './test2-routing.module';
import { Test2Component } from './test2.component';

@NgModule({
  declarations: [Test2Component],
  imports: [CommonModule, Test2RoutingModule, TranslateModule.forChild()],
})
export class Test2Module {}
