import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IJwt, ISession } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  public session: ISession = {} as ISession;
  public jwt: IJwt = {} as IJwt;
  constructor() {}

  private getJwt(token: string): IJwt {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  }

  public checkSession(): Observable<boolean> {
    const session = localStorage.getItem('nebulaSession');
    if (session) {
      const jwt = this.getJwt(JSON.parse(session).token);
      if (jwt.exp * 1000 > new Date().getTime()) {
        this.createSession(JSON.parse(session), jwt);
        return of(true);
      } else {
        return of(false);
      }
    } else {
      return of(false);
    }
  }

  private createSession(session: ISession, jwt: IJwt): void {
    this.jwt = jwt;
    this.session = session;
  }
}
