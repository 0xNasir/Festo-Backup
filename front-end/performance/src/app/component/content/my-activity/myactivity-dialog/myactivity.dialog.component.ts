import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivityService} from '../../../../share/service/activity.service';
import {OpportunityService} from '../../../../share/service/opportunity.service';

@Component({
  selector: 'app-activity-dialog',
  templateUrl: 'myactivity.dialog.html',
  styleUrls: ['./myactivity.dialog.css']
})
export class MyactivityDialogComponent {
  form: FormGroup;
  types = ['Office work', 'Project in-house development', 'Visit'];
  public choice: number;
  public opportunities: any;
  public purposes = ['Project inspection', 'Project on-site execution', 'Delivery', 'Commissioning', 'Troubleshooting'];
  public company: any;
  public branch: any;
  public person: any;
  public showCompanyAddBtn = false;

  constructor(
    public dialogRef: MatDialogRef<MyactivityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private activityService: ActivityService,
    private snackBar: MatSnackBar,
    private opportunityService: OpportunityService
  ) {
    this.opportunityService.getOpportunity().subscribe(dt => {
      this.opportunities = dt;
    });
    this.makeActivityForm();
    if (this.data.activity) {
      const activityContentArray = this.fb.array([]);
      const activityVisitArray = this.fb.array([]);
      if (this.data.activity.activityType !== null) {
        if (this.data.activity.activityType === this.types[0]) {
          this.data.activity.activityContent.forEach(dts => {
            activityContentArray.push(this.fb.group({
              contentDesc: dts.contentDesc
            }));
          });
          this.form.patchValue({
            activityId: this.data.activity.activityId,
            activityUserId: this.data.activity.activityUserId,
            activityType: this.data.activity.activityType,
            activityClient: this.data.activity.activityCompany,
            activityDate: new Date(this.data.activity.activityDate * 1000),
          });
          this.changeActivity(this.types[0]);
          this.form.setControl('activityContent', activityContentArray);
        } else if (this.data.activity.activityType === this.types[1]) {
          this.data.activity.activityContent.forEach(dts => {
            activityContentArray.push(this.fb.group({
              contentDesc: dts.contentDesc
            }));
          });
          this.form.patchValue({
            activityId: this.data.activity.activityId,
            activityUserId: this.data.activity.activityUserId,
            activityType: this.data.activity.activityType,
            activityClient: this.data.activity.activityCompany,
            activityDate: new Date(this.data.activity.activityDate * 1000),
          });
          this.changeActivity(this.types[1]);
          this.form.setControl('activityContent', activityContentArray);
        } else {
          this.data.activity.visit.forEach(dt => {
            const outcomeArray = this.fb.array([]);
            dt.visitOutCome.forEach(oc => {
              outcomeArray.push(this.fb.group({
                outCome: oc.outCome
              }));
            });
            const opportunityArray = this.fb.array([]);
            dt.visitOpportunity.forEach(oc => {
              opportunityArray.push(this.fb.group({
                opportunity: oc.opportunity
              }));
            });
            activityVisitArray.push(this.fb.group({
              visitId: dt.visitId,
              visitPurpose: dt.visitPurpose,
              visitCompanyId: dt.visitCompanyId,
              visitCompany: dt.visitCompany,
              visitCompanyBranch: this.fb.group({
                branchId: dt.visitCompanyBranch.branchId,
                branchName: dt.visitCompanyBranch.branchName,
                branchAddress: dt.visitCompanyBranch.branchAddress,
              }),
              visitCompanyPerson: this.fb.group({
                personId: dt.visitCompanyPerson.personId,
                personName: dt.visitCompanyPerson.personName,
                personDesignation: dt.visitCompanyPerson.personDesignation,
                personContactNumber: dt.visitCompanyPerson.personContactNumber
              }),
              visitCategory: dt.visitCategory,
              visitOutcome: outcomeArray,
              visitOpportunities: opportunityArray
            }));
          });
          this.form.patchValue({
            activityId: this.data.activity.activityId,
            activityUserId: this.data.activity.activityUserId,
            activityType: this.data.activity.activityType,
            activityClient: this.data.activity.activityCompany,
            activityDate: new Date(this.data.activity.activityDate * 1000),
          });
          this.changeActivity(this.types[2]);
          this.form.setControl('acivityVisit', activityVisitArray);
        }
      }
    }
  }

  makeActivityForm() {
    this.form = this.fb.group({
      activityId: [''],
      activityType: ['', Validators.required],
      activityContent: this.fb.array([]),
      activityClient: [''],
      acivityVisit: this.fb.array([
        this.makeVisitForm()
      ]),
      activityDate: [new Date(), Validators.required]
    });
  }

  makeContentForm(): FormGroup {
    return this.fb.group({
      contentDesc: ['']
    });
  }

  makeVisitForm(): FormGroup {
    return this.fb.group({
      visitId: [],
      visitPurpose: ['', Validators.required],
      visitCompanyId: ['', Validators.required],
      visitCompany: ['', Validators.required],
      visitCompanyBranch: this.fb.group({
        branchId: [''],
        branchName: ['', Validators.required],
        branchAddress: ['']
      }),
      visitCompanyPerson: this.fb.group({
        personId: [''],
        personName: ['', Validators.required],
        personDesignation: [''],
        personContactNumber: [''],
      }),
      visitCategory: ['', Validators.required],
      visitOutcome: this.fb.array([
        this.makeOutComeForm()
      ]),
      visitOpportunities: this.fb.array([
        this.makeOpportunityForm()
      ]),
    });
  }

  makeOutComeForm(): FormGroup {
    return this.fb.group({
      outCome: ['', Validators.required]
    });
  }

  makeOpportunityForm(): FormGroup {
    return this.fb.group({
      opportunity: ['', Validators.required]
    });
  }

  makeNewOutCome(visit) {
    (visit.get('visitOutcome') as FormArray).push(this.makeOutComeForm());
  }


  removeOutCome(visit, index: number) {
    (visit.get('visitOutcome') as FormArray).removeAt(index);
  }

  makeNewOpportunity(visit) {
    (visit.get('visitOpportunities') as FormArray).push(this.makeOpportunityForm());
  }

  removeOpportunity(visit, index: number) {
    (visit.get('visitOpportunities') as FormArray).removeAt(index);
  }

  makeNewVisit() {
    (this.form.get('acivityVisit') as FormArray).push(this.makeVisitForm());
  }

  removeVisit(index: number) {
    (this.form.get('acivityVisit') as FormArray).removeAt(index);
  }


  makeNewActivityContent() {
    (this.form.get('activityContent') as FormArray).push(this.makeContentForm());
  }

  removeActivityContent(index: number) {
    (this.form.get('activityContent') as FormArray).removeAt(index);
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.form.value.activityDate = Math.trunc(this.form.value.activityDate.getTime() / 1000);
    if (this.data.activity) {
      this.activityService.putActivity(this.form.value).subscribe(data => {
        this.snackBar.open(data.message, 'Close', {
          duration: 2000
        });
        if (data.affected) {
          this.dialogRef.close(data);
        }
      });
    } else {
      this.activityService.postActivity(this.form.value).subscribe(data => {
        this.snackBar.open(data.message, 'Close', {
          duration: 2000
        });
        if (data.affected) {
          this.dialogRef.close(data);
        }
      });
    }
  }

  changeActivity(type: string) {
    for (let i = this.form.value.activityContent.length; i >= 0; i--) {
      this.removeActivityContent(i);
    }
    for (let i = this.form.value.acivityVisit.length; i >= 0; i--) {
      this.removeVisit(i);
    }
    this.choice = 0;
    if (type === this.types[0]) {
      this.choice = 1;
      this.makeNewActivityContent();
    } else if (type === this.types[2]) {
      this.choice = 2;
      this.makeNewVisit();
    } else if (type === this.types[1]) {
      this.choice = 3;
      this.makeNewActivityContent();
    }
  }

  companyInput(str: string) {
    this.activityService.getCompany(str).subscribe(company => {
      this.company = company;
      this.showCompanyAddBtn = this.company.length < 1;
    });
  }

  selectCompany(company: any, index: number) {
    this.branch = company.branch;
    (this.form.get('acivityVisit') as FormArray).at(index).get('visitCompanyId').setValue(company.companyId);
  }

  selectBranch(branch: any, index: number) {
    this.person = branch.contactPerson;
    (this.form.get('acivityVisit') as FormArray).at(index).get('visitCompanyBranch').get('branchId').setValue(branch.branchId);
    (this.form.get('acivityVisit') as FormArray).at(index).get('visitCompanyBranch').get('branchAddress').setValue(branch.branchAddress);
  }

  selectPerson(person: any, index: number) {
    (this.form.get('acivityVisit') as FormArray).at(index).get('visitCompanyPerson').get('personId').setValue(person.personId);
    (this.form.get('acivityVisit') as FormArray).at(index).get('visitCompanyPerson').get('personName').setValue(person.personName);
    (this.form.get('acivityVisit') as FormArray).at(index).get('visitCompanyPerson').get('personDesignation').setValue(person.personDesignation);
    (this.form.get('acivityVisit') as FormArray).at(index).get('visitCompanyPerson').get('personContactNumber').setValue(person.personNumber);
  }
}

