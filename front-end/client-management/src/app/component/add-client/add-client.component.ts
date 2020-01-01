import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {CompanyService} from '../../service/company.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  form: FormGroup;
  private permission: any;

  constructor(
    private fb: FormBuilder,
    public location: Location,
    public router: Router,
    private companyService: CompanyService,
    private snackBar: MatSnackBar
  ) {
    this.permission = AuthService.permission;
    if (!this.permission.cms.cms_create) {
      router.navigate(['401']);
    }
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

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.companyService.storeCompany(this.form.value).subscribe(returnData => {
      this.snackBar.open(returnData['message'], 'Close', {
        duration: 5000,
      });
      this.router.navigate(['/client']);
    });

  }

}
