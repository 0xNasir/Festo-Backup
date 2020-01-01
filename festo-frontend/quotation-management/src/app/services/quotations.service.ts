import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import Travel from './travel';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuotationsService {

  constructor(private httpClient: HttpClient) {
  }

  getAllProducts(): Observable<any> {
    return this.httpClient.get(Travel.quotationURL + '?api=base/product');
  }

  getSingleQuotation(id: string): Observable<any> {
    return this.httpClient.get(Travel.quotationURL + '?api=base/quotation&id=' + id);
  }

  getAllQuotations(): Observable<any> {
    return this.httpClient.get(Travel.quotationURL + '?api=base/quotation');
  }

  storeQuotations(data): Observable<any> {
    return this.httpClient.post(Travel.quotationURL + '?api=base/quotation', data);
  }

  storePricing(data, id): Observable<any> {
    return this.httpClient.put(Travel.quotationURL + '?api=base/pricing&id=' + id, data);
  }

  deleteQuotation(data): Observable<any> {
    return this.httpClient.delete(Travel.quotationURL + '?api=base/quotation&id=' + data);
  }

  updateQuotation(data): Observable<any> {
    return this.httpClient.put(Travel.quotationURL + '?api=base/quotation', data);
  }

  storeRevisedQuotations(data, id): Observable<any> {
    return this.httpClient.post(Travel.quotationURL + '?api=base/revision&id=' + id, data);
  }

  updateRevisedQuotation(data, reviseId): Observable<any> {
    return this.httpClient.put(Travel.quotationURL + '?api=base/revision&id=' + reviseId, data);
  }

  getProductByName(data): Observable<any> {
    return this.httpClient.get(Travel.productURL + '?api=base/searchProduct&query=' + data);
  }

  getProductByPart(data): Observable<any> {
    return this.httpClient.get(Travel.productURL + '?api=base/searchProduct&part=' + data);
  }

  getClientBySearch(query): Observable<any> {
    return this.httpClient.get(Travel.clientURL + '?api=base/searchClient&q=' + query);
  }

  storeProduct(data): Observable<any> {
    return this.httpClient.post(Travel.productURL + '?api=base/product', data);
  }

  storeCompany(data): Observable<any> {
    return this.httpClient.post(Travel.clientURL + '?api=base/client', data);
  }

  storeBranch(data): Observable<any> {
    return this.httpClient.post(Travel.clientURL + '?api=base/add_branch', data);
  }

  storeContactInfo(data): Observable<any> {
    return this.httpClient.post(Travel.clientURL + '?api=base/add_contact', data);
  }

  getLastQuotationId(): Observable<any> {
    return this.httpClient.get(Travel.quotationURL + '?api=base/quotaLastId');
  }

  filterUserForContactBy(name: string): Observable<any> {
    return this.httpClient.get(Travel.swassertiveURL + '?api=base/user&name=' + name);
  }

  updateStatus(status: string, id: any): Observable<any> {
    return this.httpClient.put(Travel.quotationURL + '?api=base/updateStatus&id=' + id, {'status': status});
  }

  saveHistory(upDt: any): Observable<any> {
    return this.httpClient.post(Travel.quotationURL + '?api=base/updateHistory', upDt);
  }

  updateHistory(data: any, id: any): Observable<any> {
    return this.httpClient.put(Travel.quotationURL + '?api=base/updateHistory&id=' + id, data);
  }

  getType(productType: any): Observable<any> {
    return this.httpClient.get(Travel.productURL + '?api=base/searchProduct&type=' + productType);
  }
}
