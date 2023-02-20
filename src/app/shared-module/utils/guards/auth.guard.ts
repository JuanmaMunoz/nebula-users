import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { SessionService } from 'src/app/shared-module/services/session.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private sessionService: SessionService, private router: Router) {}
  canLoad(): Observable<boolean> {
    return this.sessionService.checkSession().pipe(
      tap((ok: boolean) => {
        if (!ok) this.router.navigate(['/login/auth']);
      })
    );
  }
}
