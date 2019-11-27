import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Location} from '@angular/common';
import {Travel} from './travel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public static permission: any;

  constructor(public httpClient: HttpClient, public location: Location) {
  }


  isLoggedIn(): Observable<any> {
    return this.httpClient.get(Travel.productURL + '?api=auth/guard').pipe(
      map(
        sc => {
          return sc;
        },
        fl => {
          return false;
        }
      ),
      catchError(err => {
        if (err.status === 401) {
          console.error('authentication denied!');
          document.location.href = Travel.authURL;
        }
        return of(false);
      })
    );
  }

  loggedInUserInfo(): Observable<any> {
    return this.httpClient.get(Travel.productURL + '?api=auth/user').pipe(
      map(res => {
        AuthService.permission = res['permission'];
        return res;
      })
    );
  }

  logMeOut(): Observable<any> {
    return this.httpClient.get(Travel.authURL + '?api=auth/out');
  }
}
