import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Travel} from './travel';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public http: HttpClient) {
  }

  getNotification(): Observable<any> {
    return this.http.get(Travel.quotationURL + '?api=base/zeroPriceProduct');
  }

  zeroPriceEmergencyData(data: any): Observable<any> {
    return this.http.post(Travel.productURL + '?api=base/notification', data);
  }
}
