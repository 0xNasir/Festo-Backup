import {Products} from './products';

export class Quotations {
  id: string;
  date: string;
  quotaNo: string;
  quotaRef: string;
  companyName: string;
  branchName: string;
  address: string;
  contactPerson: string;
  personId: string;
  designation: string;
  status: string;
  contactBy: string;
  contactByUserId: string;
  contactByUsername: string;
  contactByDesignation: string;
  remarks: string;
  productList: Products[];
  cumulativePrice: string;
  managedBy: string;
  state: string;
  doc: any;
  terms: any;
  printCount: number;
  revision: any;
  history: History[];
  contactByPhone: string;
}
export class History {
  updateHistoryId: number;
  updatedOn: number;
  updatedProduct: any;
  updatedQuotationDate: number;
  updatedQuotationNumber: string;
  updatedQuotationStatus: string;
}
