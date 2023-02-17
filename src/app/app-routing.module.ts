import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './info-module/utils/guards/auth.guard';
import { EmptyRouteComponent } from './shared-module/components/empty-route/empty-route.component';

const routes: Routes = [
  {
    path: 'users/info',
    canLoad: [AuthGuard],
    loadChildren: () => import('./info-module/info.module').then((m) => m.InfoModule),
  },
  {
    path: '**',
    component: EmptyRouteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppRoutingModule {}
