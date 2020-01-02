import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import Travel from './travel';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public httpClient: HttpClient) {
  }

  getNotification(): Observable<any> {
    return this.httpClient.get(Travel.quotationURL + '?api=base/notification');
  }

  nonZeroPriceEmergencyData(data: any): Observable<any> {
    return this.httpClient.post(Travel.productURL + '?api=base/nonZeroNotifyProduct', data);
  }

  putNotification(element: any): Observable<any> {
    return this.httpClient.put(Travel.quotationURL + '?api=base/notification', element);
  }
}
