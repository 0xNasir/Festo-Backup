import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {CompanyService} from '../../service/company.service';
import {MatSnackBar} from '@angular/material';
import {Client} from '../../plain-object/client';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  form: FormGroup;
  client: Client;
  id: any;
  private permission: any;

  constructor(
    public router: Router,
    private fb: FormBuilder,
    public location: Location,
    private activatedRoute: ActivatedRoute,
    private companyService: CompanyService,
    private snackBar: MatSnackBar
  ) {
    this.permission = AuthService.permission;
    if (!this.permission.cms.cms_update) {
      router.navigate(['401']);
    }
  }

  ngOnInit() {
    this.ngBuildForm();
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.companyService.readSingleCompany(this.id).subscribe(data => {
        this.client = data;
        const branchArray = this.fb.array([]);
        this.client.branch.forEach(dt => {
          const contactArray = this.fb.array([]);
          dt.contactPerson.forEach(contact => {
            contactArray.push(this.fb.group({
              personId: contact.personId,
              personName: contact.personName,
              personEmail: contact.personEmail,
              personNumber: contact.personNumber,
              personDesignation: contact.personDesignation
            }));
          });
          branchArray.push(this.fb.group({
            branchId: dt.branchId,
            branchName: dt.branchName,
            branchAddress: dt.branchAddress,
            contactPerson: contactArray
          }));
        });
        this.form.patchValue({
          companyId: this.id,
          companyName: this.client.companyName,
          isAuthorized: this.client.isAuthorized,
          totalBranch: this.client.totalBranch
        });
        this.form.setControl('branch', branchArray);
      });
    });
  }

  ngBuildForm() {
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
    this.companyService.updateCompany(this.form.value, this.id).subscribe(returnData => {
      this.snackBar.open(returnData['message'], 'Close', {
        duration: 5000,
      });
      this.router.navigate(['/client']);
    });

  }
}
