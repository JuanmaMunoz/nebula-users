import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './pages/info/info.component';
import { HttpClient } from '@angular/common/http';
import { assetUrl } from 'src/single-spa/asset-url';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { SessionService } from '../shared-module/services/session.service';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, `${assetUrl('i18n/')}`, '.json');
}

const routes = [
  {
    path: '',
    component: InfoComponent,
  },
];

@NgModule({
  declarations: [InfoComponent],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    RouterModule.forChild(routes),
  ],
})
export class InfoModule {}
