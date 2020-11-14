import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CacheMechanism,
  LocalizeParser,
  LocalizeRouterModule,
  LocalizeRouterSettings,
} from '@gilsdav/ngx-translate-router';
import { LocalizeRouterHttpLoader } from '@gilsdav/ngx-translate-router-http-loader';
import { TranslateService } from '@ngx-translate/core';

export function HttpLoaderFactory(
  translate: TranslateService,
  location: Location,
  settings: LocalizeRouterSettings,
  http: HttpClient
) {
  return new LocalizeRouterHttpLoader(
    translate,
    location,
    { ...settings, alwaysSetPrefix: true },
    http
  );
}

const routes: Routes = [
  {
    path: 'test',
    loadChildren: () =>
      import('./test/test.module').then((mod) => mod.TestModule),
  },
  {
    path: 'test2',
    loadChildren: () =>
      import('./test2/test2.module').then((mod) => mod.Test2Module),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: HttpLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient],
      },
      cacheMechanism: CacheMechanism.Cookie,
      cookieFormat: '{{value}};{{expires:20}};path=/',
    }),
  ],
  exports: [RouterModule, LocalizeRouterModule],
})
export class AppRoutingModule {}
