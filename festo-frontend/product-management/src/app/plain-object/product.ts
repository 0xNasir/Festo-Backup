export class Product {
  productId: number;
  productName: string;
  productPartNo: string;
  productType: string;
  productCategory: string;
  productDescription: string;
  productPrice: number;
  productInStock: number;
  productUuq: number;
  productLoan: number;
  productBooking: number;
  productPriceRevision: PriceRevision[];
  productQuantityRevision: QuantityRevision[];
  productOrigin: string;
}

export class PriceRevision {
  revisionId: string;
  revisionDate: number;
  revisionPrice: string;
}
export class QuantityRevision {
  revisionId: string;
  revisionDate: number;
  revisionInStock: string;
}
