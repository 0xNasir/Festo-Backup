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
  link: string;

  constructor(public httpClient: HttpClient, public location: Location) {
    this.getLoginLink();
  }


  loginLink(): Observable<any> {
    return this.httpClient.get(Travel.authURL + '?api=base/link');
  }

  getLoginLink() {
    this.loginLink().subscribe(data => {
      this.link = data['link'];
    });
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
          document.location.href = this.link;
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
