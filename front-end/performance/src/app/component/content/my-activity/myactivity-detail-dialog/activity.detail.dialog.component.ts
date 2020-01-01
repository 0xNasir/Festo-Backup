import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-activity-detail-dialog',
  templateUrl: 'activity.detail.dialog.html',
  styleUrls: ['activity.detail.dialog.css']
})
export class ActivityDetailDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ActivityDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log(this.data);
  }
}
