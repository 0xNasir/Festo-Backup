import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Travel} from './travel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  storeProduct(form): Observable<any> {
    return this.httpClient.post(Travel.productURL + '?api=base/product', form);
  }

  getAllProduct(): Observable<any> {
    return this.httpClient.get(Travel.productURL + '?api=base/product');
  }

  getSingleProduct(id: string): Observable<any> {
    return this.httpClient.get(Travel.productURL + '?api=base/product&id=' + id);
  }

  deleteProduct(id: number): Observable<any> {
    return this.httpClient.delete(Travel.productURL + '?api=base/product&id=' + id);
  }

  updateProduct(form): Observable<any> {
    return this.httpClient.put(Travel.productURL + '?api=base/product', form);
  }

  getDashBoardData(): Observable<any> {
    return this.httpClient.get(Travel.productURL + '?api=base/dashboard');
  }

  manageStock(data): Observable<any> {
    return this.httpClient.put(Travel.productURL + '?api=base/manage_stock', data);
  }
}
