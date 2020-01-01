import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../../services/dashboard.service';
import {Dashboard} from '../../plain-object/dashboard';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardObject: Dashboard[];
  incomplete: number;

  constructor(private dashboardService: DashboardService,
              public router: Router) {
  }

  ngOnInit() {
    this.dashboardService.getAllData().subscribe(data => {
      this.dashboardObject = data;
    });
    this.dashboardService.getIncompleteData().subscribe(data => {
      this.incomplete = data.numberOfQuotation;
    });
  }
}
