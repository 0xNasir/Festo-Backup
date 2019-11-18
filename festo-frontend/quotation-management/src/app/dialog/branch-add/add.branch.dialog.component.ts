import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QuotationsService} from '../../services/quotations.service';

@Component({
  selector: 'app-quotations',
  templateUrl: 'add.branch.dialog.html',
  styleUrls: ['./add.branch.dialog.style.css']
})
export class AddBranchDialogComponent implements OnInit {
  form: FormGroup;
  constructor(
    private service: QuotationsService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddBranchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      companyId: [this.data],
      branchId: [null],
      branchName: ['', Validators.required],
      branchAddress: ['', Validators.required],
      contactPerson: this.fb.array([
        this.makeContactPersonForm()
      ])
    });
  }

  makeContactPersonForm(): FormGroup {
    return this.fb.group({
      personId: [null],
      personName: ['', Validators.required],
      personEmail: ['', Validators.required],
      personNumber: ['', Validators.required],
      personDesignation: ['', Validators.required]
    });
  }
  makeNewContact() {
    (this.form.get('contactPerson') as FormArray).push(this.makeContactPersonForm());
  }

  RemoveContact(index: number) {
    (this.form.get('contactPerson') as FormArray).removeAt(index);
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.service.storeBranch(this.form.value).subscribe(data => {
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
