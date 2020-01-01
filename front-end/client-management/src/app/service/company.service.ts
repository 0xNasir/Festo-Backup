import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Travel} from './travel';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) {
  }

  storeCompany(data): Observable<any> {
    return this.httpClient.post(Travel.clientURL + '?api=base/client', data);
  }

  readCompany(): Observable<any> {
    return this.httpClient.get(Travel.clientURL + '?api=base/client');
  }

  readSingleCompany(id: number): Observable<any> {
    return this.httpClient.get(Travel.clientURL + '?api=base/client&id=' + id);
  }

  updateCompany(data, id): Observable<any> {
    return this.httpClient.put(Travel.clientURL + '?api=base/client&id=' + id, data);
  }

  deleteCompany(id: number): Observable<any> {
    return this.httpClient.delete(Travel.clientURL + '?api=base/client&id=' + id);
  }

  getByBranch(): Observable<any> {
    return this.httpClient.get(Travel.clientURL + '?api=base/browse&browseby=branch');
  }

  getByContact(): Observable<any> {
    return this.httpClient.get(Travel.clientURL + '?api=base/browse&browseby=contact');
  }

  getDashboard(): Observable<any> {
    return this.httpClient.get(Travel.clientURL + '?api=base/dashboard');
  }
}
