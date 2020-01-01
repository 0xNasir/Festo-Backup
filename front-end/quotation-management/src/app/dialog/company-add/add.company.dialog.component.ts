import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QuotationsService} from '../../services/quotations.service';

@Component({
  selector: 'app-quotations',
  templateUrl: 'add.company.dialog.html',
  styleUrls: ['./add.company.dialog.style.css']
})
export class AddCompanyDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    private service: QuotationsService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddCompanyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      companyId: [''],
      companyName: ['', Validators.required],
      isAuthorized: [true, Validators.required],
      branch: this.fb.array([
        this.makeBranchForm()
      ])
    });
  }

  makeBranchForm(): FormGroup {
    return this.fb.group({
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
      personEmail: ['', [Validators.required, Validators.email]],
      personNumber: ['', Validators.required],
      personDesignation: ['', Validators.required]
    });
  }

  makeNewBranch() {
    (this.form.get('branch') as FormArray).push(this.makeBranchForm());
  }

  removeBranch(index: number) {
    (this.form.get('branch') as FormArray).removeAt(index);
  }

  makeNewContact(branch) {
    (branch.get('contactPerson') as FormArray).push(this.makeContactPersonForm());
  }

  RemoveContact(branch, index: number) {
    (branch.get('contactPerson') as FormArray).removeAt(index);
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.service.storeCompany(this.form.value).subscribe(data => {
      this.snackBar.open(data['message'], 'Close', {
        duration: 2000,
      });
      if (data['allInjected']) {
        this.dialogRef.close(this.form.value);
      }
    });
  }
}
