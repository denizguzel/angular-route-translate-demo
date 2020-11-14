import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private localize: LocalizeRouterService) {}

  switchLang() {
    this.localize.changeLanguage(
      this.localize.parser.currentLang === 'fr' ? 'en' : 'fr'
    );
  }
}
