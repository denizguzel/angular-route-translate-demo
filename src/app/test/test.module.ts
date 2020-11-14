import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';

@NgModule({
  declarations: [TestComponent],
  imports: [CommonModule, TestRoutingModule, TranslateModule.forChild()],
})
export class TestModule {}
