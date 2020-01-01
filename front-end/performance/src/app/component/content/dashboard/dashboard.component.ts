import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSnackBar, MatTableDataSource} from '@angular/material';
import {ActivityService} from '../../../share/service/activity.service';
import {ActivityDialogComponent} from './activity-dialog/activity.dialog.component';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../share/service/auth.service';
import {Location} from '@angular/common';
import {ActivityDetailDialogComponent} from './detail-dialog/activity.detail.dialog.component';

export class FilterDate {
  fromDate: any;
  toDate: any;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public status: string;
  types = ['All', 'Office work', 'Project in-house development', 'Visit'];
  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  addToday = false;
  public meta: any;
  public urlParam: string;
  public user: any;
  public showContent = true;
  public repMsg: string;
  filterData: FilterDate = {
    fromDate: '',
    toDate: ''
  };
  lowestDate: any;
  highestDate: any;
  private dataArray: any;
  loadedPage = false;

  constructor(
    private activityService: ActivityService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private authService: AuthService,
    public location: Location
  ) {
  }

  ngOnInit() {
    this.addToday = true;
    this.urlParam = this.activatedRoute.snapshot.params.user;
    /**
     * checking whether the user is logged in or not.
     * If logged in then the service will return some user data.
     */
    this.authService.getUserInfo().subscribe(user => {
      this.user = user;

      /**
       * Checking the URL path is 'work/all'
       * If so, load all activity data.
       */
      if (this.activatedRoute.snapshot.routeConfig.path === 'work/all') {
        this.meta = 'workall';
        this.displayedColumns = ['id', 'name', 'type', 'company', 'activity', 'date', 'action'];
        /**
         * Checking the permission whether the logged in user has permission to view all data.
         */
        if (user.permission.wp.wp_all) {
          /**
           * Call getAllActivity function of activityService to get all activity data
           * If user is not permitted to view the other content, he/she can't access this area.
           */
          this.activityService.getAllActivity().subscribe(data => {
            this.loadedPage = true;
            this.dataArray = data;
            this.showContent = data.length > 0;
            this.repMsg = 'No data found';
            const allEpochDates = data.map(pdt => {
              return Number(pdt.activityDate) * 1000;
            });
            this.highestDate = Math.max.apply(null, allEpochDates);
            this.lowestDate = Math.min.apply(null, allEpochDates);
            this.filterData.fromDate = new Date(this.lowestDate);
            this.filterData.toDate = new Date(this.highestDate);
            this.dataSource = new MatTableDataSource<any>(data);
            this.dataSource.paginator = this.paginator;
          });
        } else {
          this.showContent = false;
          this.repMsg = 'You are not allowed to view content';
        }
      } else {
        if (this.urlParam) {
          if (user.permission.wp.wp_other) {
            this.meta = 'individual';
            this.displayedColumns = ['id', 'type', 'company', 'activity', 'date', 'action'];
            this.activityService.getIndividualActivity(this.urlParam).subscribe(data => {
              this.loadedPage = true;
              this.showContent = data.length > 0;
              this.dataArray = data;
              this.repMsg = 'No data found related to user ID ' + this.urlParam;

              const allEpochDates = data.map(pdt => {
                return Number(pdt.activityDate) * 1000;
              });
              this.highestDate = Math.max.apply(null, allEpochDates);
              this.lowestDate = Math.min.apply(null, allEpochDates);
              this.filterData.fromDate = new Date(this.lowestDate);
              this.filterData.toDate = new Date(this.highestDate);

              this.dataSource = new MatTableDataSource<any>(data);
              this.dataSource.paginator = this.paginator;
            });
          } else {
            this.showContent = false;
            this.repMsg = 'You are not allowed to view content';
          }
        } else {
          this.meta = 'dashboard';
          this.displayedColumns = ['id', 'name', 'type', 'company', 'activity', 'date', 'action'];
          if (user.permission.wp.wp_all) {
            this.activityService.getActivity().subscribe(data => {
              this.loadedPage = true;
              this.dataArray = data;
              this.showContent = this.dataArray.length > 0;
              this.repMsg = 'No data found';
              this.dataSource = new MatTableDataSource<any>(data);
              this.dataSource.paginator = this.paginator;
            });
          } else {
            this.activityService.getIndividualActivity(this.user.user.username).subscribe(data => {
              this.loadedPage = true;
              this.dataArray = data;
              this.showContent = data.length > 0;
              this.repMsg = 'No data found';
              this.dataSource = new MatTableDataSource<any>(data);
              this.dataSource.paginator = this.paginator;
            });
          }
        }
      }
    });
  }

  /**
   * this funtion will be invoked, if user press add new button or update an activity.
   * @param act
   * @param isNew
   */
  openActivityDialog(act: any, isNew?: boolean) {
    const t = isNew ? 'Add new activity' : 'Update activity';
    const dialogRef = this.dialog.open(ActivityDialogComponent, {
      width: '800px',
      data: {title: t, activity: act}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadedPage = false;
      this.ngOnInit();
    });
  }

  /**
   * Invoked if delete button is pressed.
   * It will delete all activity data that have the same activity id it is provided.
   * @param activityId
   */
  deleteActivity(activityId: any) {
    if (confirm('Do you want to delete?')) {
      this.loadedPage = false;
      this.activityService.deleteActivity(activityId).subscribe(data => {
        this.snackBar.open(data.message, 'Close', {
          duration: 2000
        });
        this.ngOnInit();
      });
    }
  }

  /**
   * Filtering the data using search field.
   * @param filterValue
   */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  filterByDate(data: FilterDate) {
    let tempTableData = this.dataArray;
    tempTableData = tempTableData.filter(dt => {
      const serverDate = Number(dt.activityDate) * 1000;
      const filterFromDate = new Date(data.fromDate).getTime();
      const filterToDate = new Date(data.toDate).getTime();
      const filterToDates = Number(filterToDate) + 86399000;

      return (serverDate >= filterFromDate && serverDate <= filterToDates);
    });
    this.dataSource = new MatTableDataSource(tempTableData);
  }

  /**
   * If the activity type is visit, a details button will be shown.
   * User press that button and the funtion will be invoked.
   * @param element
   */
  openDetailDialog(element: any) {
    this.dialog.open(ActivityDetailDialogComponent, {
      width: '800px',
      data: element
    });
  }

  /**
   * Filtering the activity data using it's type.
   * @param type
   */
  filterByType(type) {
    let tempTableData = this.dataArray;
    if (type === 'All') {
      this.dataSource = new MatTableDataSource(tempTableData);
    } else {
      tempTableData = tempTableData.filter(dt => {
        return (type === dt.activityType);
      });
      this.dataSource = new MatTableDataSource(tempTableData);
    }
  }
}
