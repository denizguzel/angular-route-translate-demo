import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Test2ChildRoutingModule } from './test2-child-routing.module';
import { Test2ChildComponent } from './test2-child.component';

@NgModule({
  declarations: [Test2ChildComponent],
  imports: [CommonModule, Test2ChildRoutingModule],
})
export class Test2ChildModule {}
