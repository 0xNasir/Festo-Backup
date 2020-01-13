import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {QuotationsService} from '../../services/quotations.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {Location} from '@angular/common';
import {AuthService} from '../../services/auth.service';
import {History, Quotations} from '../../plain-object/quotations';
import {Products} from '../../plain-object/products';
import {ProductDialogComponent} from '../../dialog/product/product.dialog.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-manage-history',
  templateUrl: './manage-history.component.html',
  styleUrls: ['./manage-history.component.css']
})
export class ManageHistoryComponent implements OnInit {
  permission: any;
  public showSpinner = true;
  private id: string;
  public history: History[];
  quotaNo: string;
  historyArray: MatTableDataSource<History>;
  displayedColumns: string[] = ['id', 'update_date', 'delivery_date', 'status', 'product', 'cumulativePrice'];
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  private isHandset: boolean;

  constructor(
    private quotationService: QuotationsService,
    public router: Router,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    public location: Location,
  ) {
    this.permission = AuthService.permission;
    if (!this.permission.qms.qms_history) {
      this.router.navigate(['404']);
    }
  }

  ngOnInit() {
    this.onResize(event);
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.quotationService.getSingleQuotation(this.id).subscribe(data => {
        this.showSpinner = false;
        this.history = data;
        this.quotaNo = data.quotaNo;
        this.historyArray = new MatTableDataSource<History>(data.history);
        this.historyArray.paginator = this.paginator;
        this.historyArray.sort = this.sort;
      });
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isHandset = window.innerWidth < 850;
  }

  openProductList(element: Products[], quotaNo: string) {
    const an = 'Sincos Automation';
    const tableData = new MatTableDataSource(element);
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '1200px',
      data: {
        product: tableData,
        quotationNumber: quotaNo
      }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
