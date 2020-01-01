import {Component, OnInit, ViewChild} from '@angular/core';
import {NotificationService} from '../../service/notification.service';
import {Location} from '@angular/common';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';
import {Travel} from '../../service/travel';
import {EmergencyProductPriceDialogComponent} from './update-popup/emergency.product.price.dialog.component';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  public showSpinner = true;
  type: any;
  notifications: any;
  empty: boolean;
  product: MatTableDataSource<any>;
  displayedColumns = ['id', 'name', 'part', 'type', 'price', 'stock', 'date', 'option'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  public permission: any;

  constructor(
    public notificationService: NotificationService,
    public location: Location,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.permission = AuthService.permission;
    if (!this.permission.pms) {
      const anchor = document.createElement('a');
      anchor.href = Travel.swAssertive;
      anchor.click();
    } else {
      if (!this.permission.pms.pms_notification) {
        this.location.back();
      }
    }
  }

  ngOnInit() {
    this.notificationService.getNotification().subscribe(data => {
      this.type = data;
      this.empty = data.length < 1;
      if (!this.empty) {
        this.notificationService.zeroPriceEmergencyData(this.type).subscribe(dts => {
          this.showSpinner = false;
          this.notifications = dts;
          this.product = new MatTableDataSource(this.notifications);
          this.product.paginator = this.paginator;
          this.product.sort = this.sort;
        });
      }
    });
  }


  openEmergencyProductPriceUpdatePopUp(element) {
    const dialogRef = this.dialog.open(EmergencyProductPriceDialogComponent, {
      width: '800px',
      data: element
    });
    dialogRef.afterClosed().subscribe(result => {
      this.showSpinner = true;
      this.ngOnInit();
    });
  }
}
