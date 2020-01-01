import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivityService} from '../../../../share/service/activity.service';
import {OpportunityService} from '../../../../share/service/opportunity.service';

@Component({
  selector: 'app-activity-dialog',
  templateUrl: 'activity.dialog.html',
  styleUrls: ['./activity.dialog.css']
})
export class ActivityDialogComponent {
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
    public dialogRef: MatDialogRef<ActivityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private activityService: ActivityService,
    private snackBar: MatSnackBar,
    private opportunityService: OpportunityService
  ) {
    /**
     * Collect all opportunity to show in form as dropdown calling getOpportunity service.
     */
    this.opportunityService.getOpportunity().subscribe(dt => {
      this.opportunities = dt;
    });
    /**
     * Making the activity form with all possible field.
     */
    this.makeActivityForm();

    /**
     * Checking whether the data has a valid activity.
     * If the activity is null, no operation will be performed
     * Otherwise form will be loaded all data from activity to update.
     */
    if (this.data.activity) {
      const activityContentArray = this.fb.array([]);
      const activityVisitArray = this.fb.array([]);

      /**
       * Checking the activity type whether it null or not.
       * If null that means not data is available unless default data.
       */
      if (this.data.activity.activityType !== null) {

        /**
         * Checking if the activity type is 'Office work', then only activity content will be loaded in the form.
         */
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
          /**
           * If the loaded activity type is 'Project in-house development',
           * only activity content and company name will be loaded with other default data.
           */
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
            /**
             * If the loaded activity type is 'visit'
             * then the visit-purpose, company data etc will be loaded.
             */
            const outcomeArray = this.fb.array([]);
            /**
             *  Here fetching the visit ourcome
             */
            dt.visitOutCome.forEach(oc => {
              outcomeArray.push(this.fb.group({
                outCome: oc.outCome
              }));
            });
            /**
             *  Here fetching the visit opportunity
             */
            const opportunityArray = this.fb.array([]);
            dt.visitOpportunity.forEach(oc => {
              opportunityArray.push(this.fb.group({
                opportunity: oc.opportunity
              }));
            });
            /**
             * All loaded visit data is pushed at activity visit array
             */
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

  /**
   * While user press the save button, this funtion will be invoked.
   * it will save all data either inject new or update previous one.
   */
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

  /**
   * Changing the activity according to the 'type'
   * This will control the activity like either it will be visit or office work etc.
   * @param type
   */
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

  /**
   * If the user select the company this funtion will be invoked
   * @param company
   * @param index
   */
  selectCompany(company: any, index: number) {
    this.branch = company.branch;
    (this.form.get('acivityVisit') as FormArray).at(index).get('visitCompanyId').setValue(company.companyId);
  }

  /**
   * If the user select branch of previosly selected company,
   * This funtion will be involed.
   * @param branch
   * @param index
   */
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
