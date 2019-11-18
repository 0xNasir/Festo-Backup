import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Location} from '@angular/common';
import {Traveller} from '../plain-object/traveller';
import Travel from './travel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public static permission: any;
  public static UserData: any;

  constructor(private httpClient: HttpClient, private location: Location) {
  }


  isLoggedIn(): Observable<any> {
    return this.httpClient.get(Travel.quotationURL + '?api=auth/guard').pipe(
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
          console.log(err);
        }
        return of(false);
      })
    );
  }

  loggedInUserInfo(): Observable<any> {
    return this.httpClient.get(Travel.quotationURL + '?api=auth/user').pipe(
      map(data => {
        AuthService.permission = data['permission'];
        AuthService.UserData = data['user'];
        return data;
      })
    );
  }

  logMeOut(): Observable<any> {
    return this.httpClient.get(Travel.swassertiveURL + '?api=auth/out');
  }
}
