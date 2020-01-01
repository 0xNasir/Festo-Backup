import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Travel} from '../static/travel';
import {catchError, map} from 'rxjs/operators';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private location: Location
  ) {
  }

  isLoggedIn(): Observable<any> {
    return this.http.get(Travel.authURL).pipe(
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
          document.location.href = Travel.swassertiveURL;
        }
        return of(false);
      })
    );
  }

  getUserInfo(): Observable<any> {
    return this.http.get(Travel.userURL);
  }
  logMeOut(): Observable<any> {
    return this.http.get(Travel.swassertiveURL + '/?api=auth/out');
  }
}
