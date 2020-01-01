import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CompanyService} from '../../service/company.service';

export interface DashboardData {
  totalCompany: number;
  totalBranch: number;
  totalContact: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardData: DashboardData = {
    totalCompany: null,
    totalBranch: null,
    totalContact: null
  };
  private permission: any;

  constructor(
    public router: Router,
    private companyService: CompanyService
  ) {
  }

  ngOnInit() {
    this.getDashboardContent();
  }

  getDashboardContent() {
    this.companyService.getDashboard().subscribe(data => {
      this.dashboardData = data;
    });
  }

}
