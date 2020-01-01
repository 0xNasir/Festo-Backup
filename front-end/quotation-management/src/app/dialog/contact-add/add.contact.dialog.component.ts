import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QuotationsService} from '../../services/quotations.service';

@Component({
  selector: 'app-quotations',
  templateUrl: 'add.contact.dialog.html',
  styleUrls: ['./add.contact.dialog.style.css']
})
export class AddContactDialogComponent implements OnInit {
  form: FormGroup;
  constructor(
    private service: QuotationsService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      branchId: [this.data],
      personId: [null],
      personName: ['', Validators.required],
      personEmail: ['', Validators.required],
      personNumber: ['', Validators.required],
      personDesignation: ['', Validators.required]
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.service.storeContactInfo(this.form.value).subscribe(data => {
      if (data['allInjected']) {
        this.snackBar.open(data['message'], 'Close', {
          duration: 2000,
        });
        this.dialogRef.close(this.form.value);
      } else {
        this.snackBar.open(data['message'], 'Close', {
          duration: 2000,
        });
      }
    });
  }
}
