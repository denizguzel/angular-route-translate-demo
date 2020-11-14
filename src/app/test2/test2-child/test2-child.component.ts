import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-test2-child',
  template: `test2 child`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Test2ChildComponent {}
