import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Travel} from '../static/travel';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(public http: HttpClient) {
  }

  getActivity(): Observable<any> {
    return this.http.get(Travel.activityURL);
  }

  getAllActivity(): Observable<any> {
    return this.http.get(Travel.allactivityURL);
  }

  getIndividualActivity(user: string): Observable<any> {
    return this.http.get(Travel.activityURL + '&user=' + user);
  }

  postActivity(data: any): Observable<any> {
    return this.http.post(Travel.activityURL, data);
  }

  putActivity(data: any): Observable<any> {
    return this.http.put(Travel.activityURL, data);
  }

  deleteActivity(activityId: any): Observable<any> {
    return this.http.delete(Travel.activityURL + '&id=' + activityId);
  }

  getCompany(str: string): Observable<any> {
    return this.http.get(Travel.searchCompanyURL + '&q=' + str);
  }
}
