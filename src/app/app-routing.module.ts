import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared-module/utils/guards/auth.guard';
import { NotFoundComponent } from './shared-module/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'users/info',
    canLoad: [AuthGuard],
    loadChildren: () => import('./info-module/info.module').then((m) => m.InfoModule),
  },
  {
    path: 'users/configuration',
    canLoad: [AuthGuard],
    loadChildren: () => import('./configuration-module/configuration.module').then((m) => m.ConfigurationModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppRoutingModule {}
