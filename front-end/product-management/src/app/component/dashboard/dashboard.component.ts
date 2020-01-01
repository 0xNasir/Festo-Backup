import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Dashboard} from '../../plain-object/dashboard';
import {NotificationService} from '../../service/notification.service';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public showSpinner = true;
  dashboardData: Dashboard = {
    totalProduct: '',
    inStockProduct: '',
    upcomingProduct: '',
    lentProduct: '',
    bookedProduct: ''
  };
  public notificationCounter: number;
  public permission: any;

  constructor(
    private productService: ProductService,
    private notificationService: NotificationService
  ) {
    this.permission = AuthService.permission;
  }

  ngOnInit() {
    this.productService.getDashBoardData().subscribe(data => {
      this.showSpinner = false;
      this.dashboardData = data;
    });
    this.loadNotification();
  }

  loadNotification() {
    this.notificationService.getNotification().subscribe(data => {
      this.notificationService.zeroPriceEmergencyData(data).subscribe(dts => {
        this.notificationCounter = dts.length;
      });
    });
  }
}
