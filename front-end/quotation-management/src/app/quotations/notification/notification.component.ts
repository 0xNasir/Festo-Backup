import {Component, OnInit, ViewChild} from '@angular/core';
import {NotificationService} from '../../services/notification.service';
import {MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {Location} from '@angular/common';
import {Quotations} from '../../plain-object/quotations';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  public notificationData: MatTableDataSource<any>;
  public dataArray: any;
  public showSpinner = true;
  public permission: any;
  displayedColumns: string[] = ['quotaNo', 'productType', 'oldPrice', 'newPrice', 'action'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    public notificationService: NotificationService,
    public location: Location,
    public snackbar: MatSnackBar
  ) {
    this.permission = AuthService.permission;
    if (!this.permission.qms.qms_notification) {
      location.back();
    }
  }

  ngOnInit() {
    this.notificationService.getNotification().subscribe(data => {
      this.notificationService.nonZeroPriceEmergencyData(data).subscribe(dts => {
        this.showSpinner = false;
        this.dataArray = dts;
        this.notificationData = new MatTableDataSource(dts);
        this.notificationData.paginator = this.paginator;
        this.notificationData.sort = this.sort;
      });
    });
  }

  notificationCheck(element) {
    this.showSpinner = true;
    this.notificationService.putNotification(element).subscribe(data => {
      this.snackbar.open(data.message, 'OK', {
        duration: 2000
      });
      this.ngOnInit();
    });
  }
}
