import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Travel} from '../static/travel';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  constructor(
    public http: HttpClient
  ) {
  }

  getOpportunity(): Observable<any> {
    return this.http.get(Travel.baseURL + '?api=base/opportunity');
  }
}
