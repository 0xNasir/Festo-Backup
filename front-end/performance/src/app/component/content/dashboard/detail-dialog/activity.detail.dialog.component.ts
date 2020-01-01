import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivityService} from '../../../../share/service/activity.service';
import {OpportunityService} from '../../../../share/service/opportunity.service';

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
