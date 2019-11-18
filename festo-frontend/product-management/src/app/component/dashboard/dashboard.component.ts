import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Dashboard} from '../../plain-object/dashboard';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardData: Dashboard = {
    totalProduct: '',
    inStockProduct: '',
    upcomingProduct: '',
    lentProduct: '',
    bookedProduct: ''
  };

  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit() {
    this.productService.getDashBoardData().subscribe(data => {
      this.dashboardData = data;
    });
  }
}
