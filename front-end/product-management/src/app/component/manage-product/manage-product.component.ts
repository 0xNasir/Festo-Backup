import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../plain-object/product';
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {ProductDialogComponent} from '../../dialog/product/product.dialog.component';
import {AuthService} from '../../service/auth.service';
import {RevisionDialogComponent} from '../../dialog/product-revision/revision.dialog.component';
import {ImportDialogComponent} from '../../dialog/import/import.dialog.component';
import * as Papa from 'papaparse';
import {Travel} from '../../service/travel';
import {element} from 'protractor';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {
  clickedDiv: number;
  selectedProduct: Product;
  permission: any;
  showExporZeroPriceProduct: boolean;
  csvData: string[][];
  zeroPriceProduct: Product[];
  productArray: Product[];
  param: string;
  stock: string;
  upcoming: string;
  product: MatTableDataSource<Product>;
  displayedColumns: string[];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  public isHandset: boolean;
  public noLoad = true;
  public showAnalyze = false;

  /**
   * index for data analysis
   */
  i = 1;
  public showSpinner = true;

  constructor(
    private productService: ProductService,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
    public router: Router,
    public location: Location,
    public dialog: MatDialog
  ) {
    this.permission = AuthService.permission;
  }

  ngOnInit() {
    this.onResize(event);
    this.activatedRoute.paramMap.subscribe(params => {
      this.param = params.get('param');
      if (this.permission.pms) {
        if (this.permission.pms.pms_price_log) {
          this.displayedColumns = ['id', 'name', 'part', 'type', 'category',
            'description', 'price', 'stock', 'uuq',
            'loan', 'booking', 'origin', 'date'];
        } else {
          this.displayedColumns = ['id', 'name', 'part', 'type', 'category',
            'description', 'stock', 'uuq',
            'loan', 'booking', 'origin', 'date'];
        }
        this.getAllProducts(this.param);
      } else {
        const anchor = document.createElement('a');
        anchor.href = Travel.swAssertive;
        anchor.click();
      }
    });
  }

  getAllProducts(param: string) {
    this.productService.getAllProduct().subscribe(data => {
      this.showSpinner = false;
      this.productArray = data;
      this.showExporZeroPriceProduct = this.productArray.length !== 0;
      if (this.noLoad) {
        this.selectedProduct = this.productArray[0];
      }
      if (param === 'zero-price') {
        if (this.permission.pms.pms_price_log) {
          this.productArray = this.productArray.filter(dt => {
            return (dt.productPrice < 1);
          });
        } else {
          this.router.navigate(['404']);
        }
      }
      this.zeroPriceProduct = this.productArray;
      this.product = new MatTableDataSource(this.productArray);
      this.product.paginator = this.paginator;
      this.product.sort = this.sort;
      this.product.filterPredicate = (datas, filter: string) => {
        const name = datas.productName.toLowerCase().includes(filter);
        const mlfb = datas.productPartNo.toLowerCase().includes(filter);
        const category = datas.productCategory.toLowerCase().includes(filter);
        const description = datas.productDescription.toLowerCase().includes(filter);
        return (name || mlfb || category || description);
      };
    });
  }

  applyFilter(filterValue: string) {
    this.product.filter = filterValue.trim().toLowerCase();
    if (this.product.paginator) {
      this.product.paginator.firstPage();
    }
  }

  deleteProduct(id: number) {
    if (confirm('Do you want to delete?')) {
      this.showSpinner = true;
      this.productService.deleteProduct(id).subscribe(data => {
        this.getAllProducts(this.param);
        this.snackBar.open(data['message'], 'Close', {
          duration: 2000
        });
      });
    }
  }

  changeValue(stock: string) {
    let productData = this.productArray;
    if (stock === '0') {
      productData = productData.filter(dt => {
        return (dt.productInStock.toString() === stock);
      });
    } else if (stock === '1') {
      productData = productData.filter(dt => {
        return (dt.productInStock >= Number(stock));
      });
    }
    this.product = new MatTableDataSource(productData);
  }

  FilterByUpcoming(upcoming: string) {
    let productData = this.productArray;
    if (upcoming === '1') {
      productData = productData.filter(dt => {
        return (dt.productUuq >= Number(upcoming));
      });
    }
    this.product = new MatTableDataSource(productData);
  }

  openProductList(element: string) {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '800px',
      data: element
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  getZeroPriceProduct() {
    let productData = this.productArray;
    productData = productData.filter(dt => {
      return (dt.productPrice < 1);
    });
    this.zeroPriceProduct = productData;
    this.product = new MatTableDataSource(productData);
  }

  ImportFromCSV() {
    const dialogRef = this.dialog.open(ImportDialogComponent, {
      width: '800px',
      data: null
    });
    dialogRef.afterClosed().subscribe(result => {
      this.showSpinner=true;
      this.ngOnInit();
    });
  }

  saveAsCSV() {

    let i = 1;
    let csv = 'Position,Part No.,Quantity,Your part no.,Identcode 1,Identcode 2,x-Stroke,Company\n';
    this.zeroPriceProduct.forEach(zeroData => {
      csv += i.toLocaleString() + ',' + zeroData.productPartNo + ','
        + zeroData.productInStock + ',,' + zeroData.productType + ',' + ',' + ',';
      csv += '\n';
      i++;
    });
    const today = new Date();
    const hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'Price request ' + today.getFullYear() + (today.getMonth() + 1).toString() + today.getUTCDate() + '.csv';
    hiddenElement.click();

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isHandset = window.innerWidth < 1024;
  }

  MoneyFormat(str: string) {
    let counter = 0;
    let shouldCount = false;
    let i = 0;
    for (; i < str.length; i++) {
      if (str[i] === '.' || shouldCount) {
        counter = counter + 1;
        shouldCount = true;
      }
    }
    const except = counter + 3;
    if (str.length > except) {
      let formattedMoney = '';
      i = 0;
      const preFormatterLength = str.length - except;
      if (preFormatterLength % 2 === 1) {
        i = 1;
        formattedMoney = formattedMoney + str[0] + ',';
      }
      let comma = true;
      for (; i < preFormatterLength; i++) {
        if (comma) {
          comma = false;
          formattedMoney = formattedMoney + str[i];
        } else {
          comma = true;
          formattedMoney = formattedMoney + str[i] + ',';
        }
      }
      for (let j = str.length - except; j < str.length; j++) {
        formattedMoney += str[j];
      }
      return formattedMoney;
    } else {
      return str;
    }
  }

  OpenRevisionDialog(revisedData: any, name: string, type: string) {
    this.noLoad = false;
    if (type === 'in' || type === 'out') {
      const dial = this.dialog.open(RevisionDialogComponent, {
        width: '500px',
        height: 'auto',
        data: {
          productName: name,
          content: revisedData,
          mType: type
        }
      });
      dial.afterClosed().subscribe(res => {
        if (res) {
          this.ngOnInit();
          this.clickedDiv = res;
          this.selectedProduct = revisedData;
        }
      });
    } else {
      const dial = this.dialog.open(RevisionDialogComponent, {
        width: '500px',
        height: 'auto',
        data: {
          productName: name,
          content: new MatTableDataSource(revisedData),
          mType: type
        }
      });
      dial.afterClosed().subscribe(res => {
      });
    }
  }

  selectedRow(row: Product) {
    if (this.clickedDiv !== row.productId) {
      this.clickedDiv = row.productId;
      this.selectedProduct = row;
    } else {
      this.clickedDiv = null;
    }
  }

  /**
   * Data analysis for inventory update.
   * @param files
   * @constructor
   */
  DataAnalyze(files: File[]) {
    Papa.parse(files[0], {
      header: true,
      skipEmptyLines: true,
      complete: (result, file) => {
        const day = file.name.substr(file.name.length - 6, 2);
        const month = file.name.substr(file.name.length - 8, 2);
        const year = file.name.substr(file.name.length - 12, 4);
        const epochDate = new Date(month + ' ' + day + ', ' + year + ' 12:00:00');
        const date = epochDate.getTime() / 1000.0;
        let csv = '';
        // let csv = 'productId,productName,productPartNo,productType,productCategory,productDescription,productPrice,productBasePrice,productInStock,productUuq,productLoan,productBooking,productOrigin,productAddedOn\n';
        result.data.forEach(dt => {
          let lSpace = 0;
          let type = null;
          let desc = null;
          const length = dt.ArticleDesignation.length;
          const option = 1;
          /**
           * Option 1: TYPE DESCRIPTION
           * Option 2: DESCRIPTION TYPE
           */
          if (option === 1) {
            /**
             * When description like TYPE DESCRIPTION
             */
            for (let x = 0; x < dt.ArticleDesignation.length; x++) {
              if (dt.ArticleDesignation[x] === ' ') {
                lSpace = x;
                break;
              }
            }
            type = dt.Identcode1 === '0' ? dt.ArticleDesignation.substr(0, lSpace) : dt.Identcode1;
            desc = dt.ArticleDesignation.substr(lSpace, length);
          } else {
            /**
             * When description like DESCRIPTION TYPE
             */
            for (let x = dt.ArticleDesignation.length; x > 0; x--) {
              if (dt.ArticleDesignation[x] === ' ') {
                lSpace = x;
                break;
              }
            }
            type = dt.Identcode1 === '0' ? dt.ArticleDesignation.substr(lSpace, length) : dt.Identcode1;
            desc = dt.ArticleDesignation.substr(0, lSpace);
          }


          csv += this.i.toLocaleString() + ',' + desc + ','
            + dt.PartNo + ',' + type + ',,' + dt.ArticleDesignation + ',' + dt.UnitSellingPrice + ',,' + dt.Quantity + ',,,,' + dt.CountryOfOrigin + ',' + date;
          csv += '\n';
          this.i++;
        });
        const hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'formatted_' + file.name;
        hiddenElement.click();
      }
    });
  }
}
