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

  constructor(private httpClient: HttpClient, private location: Location) {
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
    return this.httpClient.get(Travel.clientURL + '?api=auth/guard').pipe(
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
    return this.httpClient.get(Travel.clientURL + '?api=auth/user').pipe(
      map(data => {
        AuthService.permission = data['permission'];
        return data;
      })
    );
  }

  logMeOut(): Observable<any> {
    return this.httpClient.get(Travel.authURL + '?api=auth/out');
  }
}
