import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Products} from '../../plain-object/products';
import {QuotationsService} from '../../services/quotations.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {Branch, Client, Contact} from '../../plain-object/client';
import {AddCompanyDialogComponent} from '../../dialog/company-add/add.company.dialog.component';
import {AddBranchDialogComponent} from '../../dialog/branch-add/add.branch.dialog.component';
import {AddContactDialogComponent} from '../../dialog/contact-add/add.contact.dialog.component';
import {AuthService} from '../../services/auth.service';
import {AddProductDialogComponent} from '../../dialog/product-add/add.product.dialog.component';
import {Traveller} from '../../plain-object/traveller';


export interface QuotaStatus {
  value: string;
}

@Component({
  selector: 'app-add-quotation',
  templateUrl: './add-quotation.component.html',
  styleUrls: ['./add-quotation.component.css']
})

export class AddQuotationComponent implements OnInit {
  step = 0;
  public allUser: any;
  firstStatusSelection: boolean;
  firstRemarksInput: boolean;
  firstCompanySelect: boolean;
  firstBranchSelect: boolean;
  permission: any;
  setQuotaNo = false;
  companyId: string;
  branchId: string;
  quotaNoFirstPart: string;
  quotaNoSecondPart = '---- / ';
  quotaNoThirdPart = '';
  quotaNoFourthPart = '';
  allChar: string[] = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];
  public units = ['pcs', 'pc', 'mtr', 'ft', 'set', 'ltr'];
  firstSubmit = true;

  showAddCompanyLink: boolean;
  showAddBranchLink: boolean;
  quotationForm: FormGroup;
  product: Products[];
  progressValue: number;
  searchClient: Client[];
  branch: Branch[];
  filteredBranch: Branch[];
  filteredContact: Contact[];
  managedPersonId: string;
  contact: Contact[];
  quotaStatus: QuotaStatus[] = [
    {value: 'Preparing'},
    {value: 'Ready'},
    {value: 'Pending'},
    {value: 'Win'},
    {value: 'Loss'}
  ];

  private userData: any;
  SearchProduct: Products[];
  public showAddProductLink1: boolean;
  public showAddProductLink2: boolean;
  public showAddPersonLink: boolean;
  public activeProductLink: number;
  public showAddProductLink3: boolean;
  public filteredOptions = ['Cash cheque / Account payee cheque at the time of delivery.',
    'Cash cheque / Account payee cheque at the time of delivery. <br>40% of the total amount ' +
    'to be paid at the time of issuance of the purchase order & the remaining 60% to be paid at the time of delivery.'];
  public stadnardDelivery = ['12-14 weeks after receipt of order confirmation from your end.<br>(Subject ' +
  'to availability on first come first served basis).',
    'The items shown on the Quality Available column are available & can be delivered immediately after receipt of ' +
    'order confirmation from your end. (Subject to availability on first come first served basis)<br>Remaining items ' +
    'can be delivered 12-14 weeks after receipt of order confirmation from your end.'];
  loading: boolean;

  constructor(
    private fb: FormBuilder,
    private quotationService: QuotationsService,
    private snackBar: MatSnackBar,
    private router: Router,
    public location: Location,
    private dialog: MatDialog
  ) {
    this.permission = AuthService.permission;
    if (!this.permission.qms.qms_create) {
      this.router.navigate(['404']);
    }
    this.userData = AuthService.UserData;
  }

  getProduct(): void {
    this.quotationService.getAllProducts().subscribe(data => {
      this.product = data;
    });
  }

  ngOnInit() {
    this.loading = false;
    this.firstStatusSelection = true;
    this.firstRemarksInput = true;
    this.firstCompanySelect = true;
    this.firstBranchSelect = true;
    this.getQuotationId();
    this.progressValue = 20;
    this.managedPersonId = '';
    this.getProduct();

    /**
     *  Call the form build function
     */
    this.buildQuotationForm();

    /**
     * Binding the other form fields
     */
    this.addProductToProductList();

    /**
     * Adding fields to the terms and conditions
     * with default data.
     */
    (this.quotationForm.get('termsCondition') as FormArray).push(
      this.fb.group({
        topic: ['PAYMENT', Validators.required],
        message: ['', Validators.required]
      })
    );
    (this.quotationForm.get('termsCondition') as FormArray).push(
      this.fb.group({
        topic: ['STANDARD DELIVERY', Validators.required],
        message: ['', Validators.required]
      })
    );
    (this.quotationForm.get('termsCondition') as FormArray).push(
      this.fb.group({
        topic: ['EXPEDITED DELIVERY'],
        message: ['<strong>Urgent delivery is possible on a case-by-case basis and is subjected to additional charges.</strong>']
      })
    );
    (this.quotationForm.get('termsCondition') as FormArray).push(
      this.fb.group({
        topic: ['VALIDITY OF OFFER', Validators.required],
        message: ['7 days from the date of issuance of this quotation.<br>' +
        '(Priority would be given on first come first served basis)', Validators.required]
      })
    );
    (this.quotationForm.get('termsCondition') as FormArray).push(
      this.fb.group({
        topic: ['BRAND', Validators.required],
        message: ['Festo, Germany', Validators.required]
      })
    );
    (this.quotationForm.get('termsCondition') as FormArray).push(
      this.fb.group({
        topic: ['PARTIAL DELIVERY', Validators.required],
        message: ['To be allowed', Validators.required]
      })
    );

    this.addPdfInfo();

    this.quotationForm.get('branchName').disable();
    this.quotationForm.get('branchAddress').disable();
    this.quotationForm.get('contactPerson').disable();
    this.quotationForm.get('designation').disable();
  }

  /**
   * Building the quotation form.
   * It will add controls and validations in the quotation form.
   * It also have some form array which is implemented in ngOnInit() function
   */
  buildQuotationForm() {
    this.quotationForm = this.fb.group({
      id: [Traveller.quotationId],
      date: [new Date(), Validators.required],
      quotaNo: ['', Validators.required],
      quotaRef: [''],
      companyName: ['', Validators.required],
      branchName: ['', Validators.required],
      branchAddress: ['', Validators.required],
      contactPerson: ['', Validators.required],
      personId: ['', Validators.required],
      designation: ['', Validators.required],
      status: ['Preparing', Validators.required],
      contactBy: [this.userData.fullName, Validators.required],
      contactByUserId: [this.userData.userId, Validators.required],
      contactByUsername: [this.userData.username, Validators.required],
      contactByDesignation: [this.userData.userDesignation, Validators.required],
      contactByPhone: [this.userData.userPhone, Validators.required],
      remarks: [''],
      productList: this.fb.array([]),
      generatePdf: this.fb.group({}),
      termsCondition: this.fb.array([])
    });
  }

  addProductToProductList() {
    (this.quotationForm.get('productList') as FormArray).push(this.makeProductFormGroup());
  }

  removeProductFromProductList(index: number) {
    (this.quotationForm.get('productList') as FormArray).removeAt(index);
  }

  addTerms() {
    (this.quotationForm.get('termsCondition') as FormArray).push(this.makeTermsConditionForm());
  }

  removeTerms(index: number) {
    (this.quotationForm.get('termsCondition') as FormArray).removeAt(index);
  }

  addPdfInfo() {
    this.quotationForm.setControl('generatePdf', this.makePdfContent());
  }

  /**
   * This function creates form group for product array.
   * In each object of prduct array, a new instance of this group will be added.
   * It contains controls and built-in validation and custom validation
   */
  makeProductFormGroup(): FormGroup {
    return this.fb.group({
      productId: [null],
      productName: ['', Validators.required],
      productPartNumber: ['', Validators.required],
      internalPartNumber: ['', Validators.required],
      productType: ['', Validators.required],
      productQty: ['', [Validators.required, Validators.min(1), Validators.pattern('^(?=.*\\d)')]],
      productUnit: ['', Validators.required],
      productQtyAvailable: ['', [Validators.required, Validators.min(0)]],
      productPrice: ['', [Validators.required, Validators.min(0)]],
      productDescription: ['', Validators.required]
    });
  }

  /**
   * Here is the controls for subject, body, vat and suggestion field.
   * It also have default value with proper validation.
   * This form group will be appended in quotationForm group.
   */
  makePdfContent(): FormGroup {
    return this.fb.group({
      pdfId: [null],
      pdfSubject: ['Quotation for Supply of Festo Pneumatic Components', Validators.required],
      pdfBody: ['Dear Sir,<br>' +
      'As desired, please find below our quotations for Festo Pneumatic ' +
      'Components for favourable evaluation at your end.', Validators.required],
      pdfVat: [7.5, Validators.required],
      suggestion: ['We look forward to being favored with your valuable order in due course.<br>' +
      'Should you require any other information, please do not hesitate to contact us.', Validators.required]
    });
  }

  /**
   * Creating terms and condition form group.
   */
  makeTermsConditionForm(): FormGroup {
    return this.fb.group({
      topic: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  /**
   * Last quotation Id to have the auto generate quotation Number
   */
  getQuotationId() {
    this.quotationService.getLastQuotationId().subscribe(data => {
      const date = new Date(this.quotationForm.value.date);
      const month = date.getMonth();
      const year = date.getFullYear().toString().substr(-2);
      this.quotaNoThirdPart = this.allChar[Number(year) - 1] + this.allChar[month] + ' ' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
      this.quotaNoFirstPart = 'FSQT / ';
      this.quotaNoFourthPart = '/ ' + ((Number(data.quotaId) + 1) < 10 ? '0' + String(Number(data.quotaId) + 1) : String(Number(data.quotaId) + 1));
      this.quotationForm.get('quotaNo').setValue(
        this.quotaNoFirstPart + this.quotaNoSecondPart + this.quotaNoThirdPart
      );
      if (!this.setQuotaNo) {
        this.quotationForm.get('quotaNo').disable();
      }
    });
  }

  /**
   * When the user submit the qutation form, this function will be invoked.
   * It will save the quotation in the database by calling 'storeQuotations' of quotation service.
   */
  saveQuotation() {
    this.loading = true;
    const upDt = this.quotationForm.value;
    upDt.quotaNo = this.quotationForm.value.quotaNo + this.quotaNoFourthPart;
    upDt.date = Math.trunc(this.quotationForm.value.date.getTime() / 1000);
    this.quotationService.storeQuotations(upDt).subscribe(data => {
      if (data.injected) {
        Traveller.quotationId = data.quotationId;
        this.firstSubmit = false;
        this.snackBar.open('Quotation is saved and product is opened', 'Close', {
          duration: 2000,
        });
        this.step++;
        this.loading = false;
      } else {
        this.loading = false;
      }
    });
  }

  /**
   * When user click on any next button, this function will be fired
   * It will update the quotation each time, user submitted.
   */
  updtQuotation() {
    this.loading = true;
    this.quotationForm.value.id = Traveller.quotationId;
    const upDt = this.quotationForm.value;
    upDt.quotaNo = this.quotationForm.value.quotaNo + this.quotaNoFourthPart;
    if (this.firstSubmit) {
      upDt.date = Math.trunc(this.quotationForm.value.date.getTime() / 1000);
      this.firstSubmit = false;
    }
    this.quotationService.updateQuotation(upDt).subscribe(data => {
      if (data.injected) {
        this.step++;
        this.loading = false;
        if (this.step > 3) {
          this.snackBar.open('Quotation is successfully created', 'Close', {
            duration: 2000,
          });
          this.router.navigate(['/quotations']);
        } else {
          this.snackBar.open('Product is saved and Docs is opened', 'Close', {
            duration: 2000,
          });
        }
      } else {
        this.loading = false;
      }
    });
  }

  /**
   * Invoke the function during input in company input
   * In each input of company name field will call this function.
   * @param name
   */
  pickCompany(name) {
    this.quotationService.getClientBySearch(name).subscribe(data => {
      this.searchClient = data;
      this.showAddCompanyLink = this.searchClient.length === 0;
    });
  }

  /**
   * Invoke the function on selecting a company
   * Selecting a company from suggested list below company field will
   * 1. enable branch name, quotation no.
   * 2. Add the branhes to branch list variable.
   * 3. Company name will be splitted and take first character of each word to form a quotation number.
   * @param branch
   * @param company
   */
  selectClient(branch: Branch[], company: Client) {
    this.quotationForm.get('branchName').enable();
    this.quotationForm.get('branchAddress').disable();
    this.quotationForm.get('contactPerson').disable();
    this.quotationForm.get('designation').disable();
    this.showAddBranchLink = false;
    this.branch = branch;
    this.companyId = company.companyId;
    this.filteredBranch = this.branch;
    if (this.quotationForm.get('companyName').value !== company.companyName) {
      this.quotationForm.get('branchName').setValue('');
      this.quotationForm.get('branchAddress').setValue('');
      this.quotationForm.get('contactPerson').setValue('');
      this.quotationForm.get('designation').setValue('');
    }
    const cmName = company.companyName.split(' ');
    let quotaCmFormat = '';
    for (const cname of cmName) {
      quotaCmFormat = quotaCmFormat + cname[0];
    }
    this.quotaNoSecondPart = quotaCmFormat + ' / ';
    if (!this.setQuotaNo) {
      this.quotationForm.get('quotaNo').enable();
      this.setQuotaNo = true;
    }
    this.getQuotationId();

    if (this.firstCompanySelect) {
      this.progressValue = this.progressValue + 11.11;
      this.firstCompanySelect = false;
    }
  }

  /**
   * Filtering the branch name when branch name is inputted.
   * Show the add branch link, if the filtered branch length is 0
   * @param branchName
   */
  pickBranch(branchName) {
    if (this.branch) {
      this.filteredBranch = this.branch.filter(branch => branch.branchName.toLowerCase().indexOf(branchName.toLowerCase()) !== -1);
      this.showAddBranchLink = this.filteredBranch.length === 0;
    }
  }

  /**
   * Selecting the branch from auto-completed list below branch name input field will-
   * 1. Enable branch address, contact person.
   * 2. Set contact and branch id variable with contactPerson array and branchId data.
   * 3. Set value in branch address.
   * 4. Set empty in contactPerson and designation field.
   * @param branch
   */
  selectBranch(branch: Branch) {
    this.quotationForm.get('branchAddress').enable();
    this.quotationForm.get('contactPerson').enable();
    this.contact = branch.contactPerson;
    this.branchId = branch.branchId;
    this.filteredContact = this.contact;
    this.quotationForm.get('branchAddress').setValue(branch.branchAddress);
    this.quotationForm.get('contactPerson').setValue('');
    this.quotationForm.get('designation').setValue('');
    this.showAddPersonLink = false;
    if (this.firstBranchSelect) {
      this.progressValue = this.progressValue + 22.22;
      this.firstBranchSelect = false;
    }
  }

  /**
   * Filter the contact from the contact array.
   * If not found, show add person link will be shown.
   * @param personName
   */
  pickContact(personName) {
    if (this.contact) {
      this.filteredContact = this.contact.filter(contact => contact.personName.toLowerCase().indexOf(personName.toLowerCase()) !== -1);
    }
    this.showAddPersonLink = this.filteredContact.length === 0;
  }

  /**
   * Selecting the person from auto-completed list will-
   * 1. Enable the designation field.
   * 2. set value in designation field.
   * 3. set value in managedPersonId and personId.
   * @param person
   */
  selectPerson(person: Contact) {
    this.quotationForm.get('designation').enable();
    this.quotationForm.get('designation').setValue(person.personDesignation);
    this.managedPersonId = person.personId;
    this.quotationForm.get('personId').setValue(this.managedPersonId);
    this.progressValue = this.progressValue + 22.22;
  }

  /**
   * Invoke when add company icon link under company input field is clicked.
   * It will open company form in a dialog.
   */
  openCompanyForm() {
    const dialogRef = this.dialog.open(AddCompanyDialogComponent, {
      width: '1000px',
      height: 'auto',
      data: null
    });
    dialogRef.afterClosed().subscribe(result => {
      this.selectClient(result.branch, result);
      this.quotationForm.get('companyName').setValue(result.companyName);
      this.quotationForm.get('branchName').setValue(result.branch[0].branchName);
      this.quotationForm.get('branchAddress').setValue(result.branch[0].branchAddress);
      this.quotationForm.get('contactPerson').setValue(result.branch[0].contactPerson[0].personName);
      this.quotationForm.get('designation').setValue(result.branch[0].contactPerson[0].personDesignation);
      this.quotationForm.get('branchAddress').enable();
      this.quotationForm.get('contactPerson').enable();
      this.quotationForm.get('designation').enable();
      this.showAddCompanyLink = false;
      this.showAddPersonLink = false;
      this.showAddBranchLink = false;
    });
  }


  /**
   * Open the branch form under a company
   * If the branch is not available, a + button will be displayed under the branch name input field.
   * If user click on that button, this function will be invoked.
   * Form will open in a dialog pop up.
   */
  openBranchForm() {
    const dialogRef = this.dialog.open(AddBranchDialogComponent, {
      width: '1000px',
      height: 'auto',
      data: this.companyId
    });
    dialogRef.afterClosed().subscribe(result => {
      this.quotationForm.get('branchName').setValue(result.branchName);
      this.quotationForm.get('branchAddress').setValue(result.branchAddress);
      this.quotationForm.get('contactPerson').setValue(result.contactPerson[0].personName);
      this.quotationForm.get('designation').setValue(result.contactPerson[0].personDesignation);
      this.quotationForm.get('designation').enable();
      this.showAddBranchLink = false;
    });
  }


  /**
   * If the contact person under a branch is not available, user can add a new contact person within this form.
   * When user click + button under person name input field, a pop up window will open with a form.
   * This function help to open the dialog pop up.
   */
  openContactForm() {
    const dialogRef = this.dialog.open(AddContactDialogComponent, {
      width: '1000px',
      height: 'auto',
      data: this.branchId
    });
    dialogRef.afterClosed().subscribe(result => {
      this.quotationForm.get('contactPerson').setValue(result.personName);
      this.quotationForm.get('designation').setValue(result.personDesignation);
      this.quotationForm.get('designation').enable();
      this.showAddPersonLink = false;
    });
  }

  /**
   * Loading the user from swassertive application to assign the quotation to them.
   * To get a user in filter result, he must be registered in swassertive user module.
   * @param name
   */
  filterContactBy(name: string) {
    this.quotationService.filterUserForContactBy(name).subscribe(data => {
      this.allUser = data;
    });
  }

  /**
   * If the product input is filling up, this function will be invoked.
   * Here param product is the name of product.
   * @param product
   */
  pickProduct(product) {
    this.quotationService.getProductByName(product).subscribe(data => {
      this.SearchProduct = data;
      this.showAddProductLink1 = this.SearchProduct.length === 0;
    });
  }

  /**
   * Focusing the field to show add link.
   * It also rememner the index of that object, where + button need to be displayed.
   * @param index
   */
  focusStatus(index) {
    this.activeProductLink = null;
    this.activeProductLink = index;
  }

  pickProductByPart(part) {
    this.quotationService.getProductByPart(part).subscribe(data => {
      this.SearchProduct = data;
      this.showAddProductLink2 = this.SearchProduct.length === 0;
    });
  }

  selectProduct(prdt: Products, index: number, productQty) {
    (this.quotationForm.get('productList') as FormArray).setControl(index, this.fb.group({
      productId: [null],
      productName: [prdt.productName, Validators.required],
      productPartNumber: [prdt.productPartNumber, Validators.required],
      internalPartNumber: [prdt.productPartNumber, Validators.required],
      productType: [prdt.productType, Validators.required],
      productQty: [1, [Validators.required, Validators.min(1)]],
      productQtyAvailable: [1, [Validators.required, Validators.min(0)]],
      productUnit: ['', [Validators.required, Validators.min(0)]],
      productPrice: [prdt.productPrice, [Validators.required, Validators.min(0)]],
      productDescription: [prdt.productDescription, Validators.required]
    }));
    this.progressValue = this.progressValue + 25;
  }

  openProductForm(index: any) {
    const dialogRef = this.dialog.open(AddProductDialogComponent, {
      width: '800px',
      height: 'auto',
      data: null
    });
    dialogRef.afterClosed().subscribe(result => {
      (this.quotationForm.get('productList') as FormArray).setControl(index, this.fb.group({
        productId: [null],
        productName: [result.productName, Validators.required],
        productPartNumber: [result.productPartNo, Validators.required],
        internalPartNumber: [result.productPartNo, Validators.required],
        productType: [result.productType, Validators.required],
        productQty: [1, Validators.required],
        productQtyAvailable: [1, Validators.required],
        productPrice: [result.productPrice, Validators.required],
        productDescription: [result.productDescription, Validators.required]
      }));
      this.showAddProductLink1 = false;
      this.showAddProductLink2 = false;
    });
  }

  QuantityPricing() {
    this.loading = true;
    this.quotationService.storePricing(this.quotationForm.value, Traveller.quotationId).subscribe(data => {
      if (data.injected) {
        this.step++;
        this.loading = false;
      } else {
        this.loading = false;
      }
    });
  }

// Expansion panel settings
  setStep(index: number) {
    this.step = index;
  }

  prevStep() {
    this.step--;
  }

  SelectStatus() {
    if (this.firstStatusSelection) {
      this.progressValue = this.progressValue + 11.11;
      this.firstStatusSelection = false;
    }
  }

  InputRemarks() {
    if (this.firstRemarksInput) {
      this.progressValue = this.progressValue + 11.11;
      this.firstRemarksInput = false;
    }
    if (this.quotationForm.get('remarks').value === '') {
      this.progressValue = this.progressValue - 11.11;
      this.firstRemarksInput = true;
    }
  }

  pickType(productType: any) {
    this.quotationService.getType(productType).subscribe(data => {
      this.SearchProduct = data;
      this.showAddProductLink3 = this.SearchProduct.length === 0;
    });
  }

  selectContactBy(user: any) {
    this.quotationForm.get('contactByUserId').setValue(user.userId);
    this.quotationForm.get('contactByUsername').setValue(user.username);
    this.quotationForm.get('contactByDesignation').setValue(user.designations[0].title);
    this.quotationForm.get('contactByPhone').setValue(user.phones[0].number);
  }
}
