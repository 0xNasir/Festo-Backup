import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import Travel from './travel';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) {
  }

  getAllData(): Observable<any> {
    // TODO: Need the change the link to hosted link
    return this.httpClient.get(Travel.quotationURL + '?api=base/dashboard');
  }

  getIncompleteData(): Observable<any> {
    return this.httpClient.get(Travel.quotationURL + '?api=base/dashboard&state=Incomplete');
  }
}
