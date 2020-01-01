import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSnackBar, MatTableDataSource} from '@angular/material';
import {ActivityService} from '../../../share/service/activity.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../share/service/auth.service';
import {Location} from '@angular/common';
import {MyactivityDialogComponent} from './myactivity-dialog/myactivity.dialog.component';
import {ActivityDetailDialogComponent} from './myactivity-detail-dialog/activity.detail.dialog.component';

@Component({
  selector: 'app-my-activity',
  templateUrl: './my-activity.component.html',
  styleUrls: ['./my-activity.component.scss']
})
export class MyActivityComponent implements OnInit {
  displayedColumns: string[] = ['id', 'type', 'company', 'activity', 'date', 'action'];
  public dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  private user: any;
  public loadedPage = false;

  constructor(
    private activityService: ActivityService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    public router: Router,
    private authService: AuthService,
    public location: Location
  ) {
  }

  ngOnInit() {
    this.authService.getUserInfo().subscribe(user => {
      this.user = user;
      this.activityService.getIndividualActivity(this.user.user.username).subscribe(data => {
        this.loadedPage = true;
        this.dataSource = new MatTableDataSource<any>(data);
        this.dataSource.paginator = this.paginator;
      });
    });
  }

  openActivityDialog(act: any, isNew?: boolean) {
    const t = isNew ? 'Add new activity' : 'Update activity';
    const dialogRef = this.dialog.open(MyactivityDialogComponent, {
      width: '800px',
      data: {title: t, activity: act}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadedPage = false;
      this.ngOnInit();
    });
  }

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

  openDetailDialog(element: any) {
    this.dialog.open(ActivityDetailDialogComponent, {
      width: '800px',
      data: element
    });
  }
}
