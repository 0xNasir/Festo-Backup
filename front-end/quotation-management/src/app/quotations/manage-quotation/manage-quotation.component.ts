import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import {Quotations} from '../../plain-object/quotations';
import {QuotationsService} from '../../services/quotations.service';
import {Products} from '../../plain-object/products';
import {ProductDialogComponent} from '../../dialog/product/product.dialog.component';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {AuthService} from '../../services/auth.service';
import {RedirectService} from '../../services/redirect.service';
import {RevisedQuotationComponent} from '../../dialog/revised-quotation/revised-quotation.component';
import Travel from '../../services/travel';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export class FilterDate {
  fromDate: any;
  toDate: any;
}

@Component({
  selector: 'app-manage-quotation',
  templateUrl: './manage-quotation.component.html',
  styleUrls: ['./manage-quotation.component.css']
})
export class ManageQuotationComponent implements OnInit {
  public showSpinner = true;
  filterTxt: string;
  filterFieldPlaceholder = 'Filter';
  filterBy = 2;
  permission: any;
  filterData: FilterDate = {
    fromDate: '',
    toDate: ''
  };
  /**
   * Declaring a list for quotation status.
   */
  public quotaStatus = ['all', 'preparing', 'ready', 'win', 'loss', 'pending', 'incomplete'];
  clickedDiv: string;
  lowestDate: any;
  highestDate: any;
  status: string;
  quotationArray: Quotations[];
  selectedQuotation: Quotations;
  quotations: MatTableDataSource<Quotations>;
  /**
   * Declaring material table column definition.
   */
  displayedColumns: string[] = ['date', 'quota', 'company',
    'contact', 'cumulativePrice', 'status',
    'person', 'remarks'];
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  public isHandset: boolean;
  public searchValue: string;
  public staffTitleText: string;
  public routerPath: string;

  constructor(private quotationService: QuotationsService,
              public router: Router,
              private activatedRoute: ActivatedRoute,
              private snackBar: MatSnackBar,
              public dialog: MatDialog,
              public location: Location,
              public opentab: RedirectService) {
    this.permission = AuthService.permission;
  }


  ngOnInit() {
    this.onResize(event);
    const routerPortion = this.activatedRoute.snapshot.routeConfig.path.split(':');
    this.routerPath = routerPortion[0];
    this.activatedRoute.paramMap.subscribe(params => {
      this.status = params.get('status');
      if (routerPortion[0] === 'quotations/staff/') {
        this.staffTitleText = ' managed by ' + params.get('staff');
        const staff = params.get('staff');
        this.getStaffQuotationData(staff);
      } else if (this.status === 'all') {
        this.router.navigate(['/quotations']);
      } else {
        this.getQuotation(this.status);
      }
    });
  }

  getQuotation(status: string): void {
    this.clickedDiv = '';
    this.quotationService.getAllQuotations().subscribe(data => {
      this.showSpinner = false;
      this.quotationArray = data;
      this.selectedQuotation = this.quotationArray[0];
      if (status) {
        if (status === 'incomplete') {
          this.quotationArray = this.quotationArray.filter(dt => {
            return (dt.state.toLowerCase() === status.toLowerCase());
          });
        } else {
          this.quotationArray = this.quotationArray.filter(dt => {
            return (dt.status.toLowerCase() === status.toLowerCase());
          });
        }
      }
      const allEpochDates = this.quotationArray.map(pdt => {
        return Number(pdt.date) * 1000;
      });
      this.highestDate = Math.max.apply(null, allEpochDates);
      this.lowestDate = Math.min.apply(null, allEpochDates);
      this.filterData.fromDate = new Date(this.lowestDate);
      this.filterData.toDate = new Date(this.highestDate);

      this.quotations = new MatTableDataSource(this.quotationArray);
      this.quotations.paginator = this.paginator;
      this.quotations.sort = this.sort;

      this.quotations.filterPredicate = (datas, filter: string) => {

        if (this.filterBy === 1) {
          const companyName = datas.companyName.toLowerCase().includes(filter);
          return (companyName);
        } else {
          const quotaNo = datas.quotaNo.toLowerCase().includes(filter);
          const companyName = datas.companyName.toLowerCase().includes(filter);
          const contactPerson = datas.contactPerson.toLowerCase().includes(filter);
          const contactBy = datas.contactBy.toLowerCase().includes(filter);
          const sts = datas.status.toLowerCase().includes(filter);
          return (quotaNo || companyName || contactPerson || contactBy || sts);
        }
      };
    });
  }

  getStaffQuotationData(staff: string) {
    this.quotationService.getAllQuotations().subscribe(data => {
      this.showSpinner = false;
      this.quotationArray = data;
      this.quotationArray = this.quotationArray.filter(dt => {
        return (dt.contactByUsername.toLowerCase() === staff.toLowerCase());
      });
      const allEpochDates = this.quotationArray.map(pdt => {
        return Number(pdt.date) * 1000;
      });
      this.filterData.fromDate = new Date(Math.min.apply(null, allEpochDates));
      this.filterData.toDate = new Date(Math.max.apply(null, allEpochDates));
      this.quotations = new MatTableDataSource(this.quotationArray);
      this.quotations.paginator = this.paginator;
      this.quotations.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.filterTxt = filterValue;
    this.quotations.filter = filterValue.trim().toLowerCase();
    if (this.quotations.paginator) {
      this.quotations.paginator.firstPage();
    }
  }

  deleteQuotation(id: string) {
    if (confirm('Do you want to delete quotation?')) {
      this.showSpinner = true;
      this.quotationService.deleteQuotation(id).subscribe(data => {
        this.ngOnInit();
        this.snackBar.open(data.message, 'Close', {
          duration: 2000,
        });
      });
    }
  }

  openProductList(element: Products[], quotaNo: string) {
    const an = 'Sincos Automation';
    const tableData = new MatTableDataSource(element);
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '1000px',
      data: {
        product: tableData,
        quotationNumber: quotaNo
      }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  filterByDate(data: FilterDate) {
    let tempTableData = this.quotationArray;
    tempTableData = tempTableData.filter(dt => {
      const serverDate = Number(dt.date) * 1000;
      const filterFromDate = new Date(data.fromDate).getTime();
      const filterToDate = new Date(data.toDate).getTime();
      const filterToDates = Number(filterToDate) + 86399000;

      return (serverDate >= filterFromDate && serverDate <= filterToDates);
    });
    this.quotations = new MatTableDataSource(tempTableData);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isHandset = window.innerWidth < 850;
  }

  changeSearchParam(param: string, enc: number) {
    this.filterBy = enc;
    this.filterFieldPlaceholder = param;
  }

  exportAsCSV() {
    let csv = 'Date,Quota No.,Company Name,Contact By,Cumulative price,Status,Contact person, Remarks\n';

    this.quotations.filteredData.forEach(data => {
      const dt = new Date(Number(data.date) * 1000);
      csv += dt.toLocaleDateString('en-US') + ',' + data.quotaNo + ',' +
        data.companyName + ',' + data.contactBy + ',' + data.cumulativePrice + ',' +
        data.status + ',' + data.contactPerson + ',' + data.remarks + '\n';
    });
    const hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'Quotations.csv';
    hiddenElement.click();
  }

  /**
   * Open the selected quotation in a pdf format.
   * @param element
   */
  gotoPDF(element: Quotations) {
    this.opentab.post(element, Travel.quotationURL + '?api=pdf/festo');
    this.showSpinner = true;
    this.ngOnInit();
  }

  /**
   * BDT currency format.
   * The proper puncuation mark in BDT system like
   * 1,12,65,446.00
   * @param str
   */
  formatedPrice(str: string) {
    if (str.length > 6) {
      let ts = '';
      let i = 0;
      const preFormatterLength = str.length - 6;
      if (preFormatterLength % 2 === 1) {
        i = 1;
        ts = ts + str[0] + ',';
      } else {
        i = 0;
      }
      let comma = true;
      for (; i < preFormatterLength; i++) {
        if (comma) {
          comma = false;
          ts = ts + str[i];
        } else {
          comma = true;
          ts = ts + str[i] + ',';
        }
      }
      for (let j = str.length - 6; j < str.length; j++) {
        ts += str[j];
      }
      return ts;
    } else {
      return str;
    }
  }

  selectRow(row: Quotations) {
    if (this.clickedDiv !== row.id) {
      this.clickedDiv = row.id;
      this.selectedQuotation = row;
    } else {
      this.clickedDiv = '';
    }
  }

  OpenRevision(selectedQuotation: Quotations) {
    const tableData = new MatTableDataSource(selectedQuotation.revision);
    const dialogRef = this.dialog.open(RevisedQuotationComponent, {
      width: '1200px',
      data: {
        revision: tableData,
        quotation: selectedQuotation.quotaNo
      }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  markAs(status: string) {
    this.showSpinner = true;
    this.quotationService.updateStatus(status, this.selectedQuotation.id).subscribe(dts => {
      this.ngOnInit();
      this.snackBar.open(dts.message, 'Close', {
        duration: 2000,
      });
    });
  }
}
