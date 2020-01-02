import {Component, OnInit} from '@angular/core';
import {Form, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Quotations} from '../../plain-object/quotations';
import {QuotationsService} from '../../services/quotations.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatSnackBar} from '@angular/material';
import {Location} from '@angular/common';
import {Products} from '../../plain-object/products';
import {AddProductDialogComponent} from '../../dialog/product-add/add.product.dialog.component';
import {Branch, Client, Contact} from '../../plain-object/client';
import {AddCompanyDialogComponent} from '../../dialog/company-add/add.company.dialog.component';
import {AddContactDialogComponent} from '../../dialog/contact-add/add.contact.dialog.component';
import {AddBranchDialogComponent} from '../../dialog/branch-add/add.branch.dialog.component';
import {AuthService} from '../../services/auth.service';

export interface QuotaStatus {
  value: string;
}

@Component({
  selector: 'app-quotations',
  templateUrl: './update-quotation.component.html',
  styleUrls: ['./update-quotation.component.css']
})

export class UpdateQuotationComponent implements OnInit {
  public showSpinner = true;
  historyId: number;
  public loading: boolean;
  showAddPersonLink: boolean;
  showAddCompanyLink: boolean;
  showAddBranchLink: boolean;
  companyId: string;
  branchId: string;
  updateQuotationForm: FormGroup;
  public quotation: Quotations;
  progressValue: number;
  SearchProduct: Products[];
  branch: Branch[];
  id: string;
  activeProductLink: number;
  searchClient: Client[];
  contact: Contact[];
  showAddProductLink1: boolean;
  showAddProductLink2: boolean;
  public units = ['pcs', 'pc', 'mtr', 'ft', 'set', 'ltr'];
  filteredBranch: Branch[];
  filteredContact: Contact[];
  quotaStatus: QuotaStatus[] = [
    {value: 'Preparing'},
    {value: 'Ready'},
    {value: 'Pending'},
    {value: 'Win'},
    {value: 'Loss'}
  ];
  public permission: any;
  public allUser: any;
  public step = 0;
  public showAddProductLink3: boolean;
  public filteredOptions = ['Cash cheque / Account payee cheque at the time of delivery.',
    'Cash cheque / Account payee cheque at the time of delivery. <br>40% of the total amount ' +
    'to be paid at the time of issuance of the purchase order & the remaining 60% to be paid at the time of delivery.'];
  public stadnardDelivery = ['12-14 weeks after receipt of order confirmation from your end.<br>(Subject ' +
  'to availability on first come first served basis).',
    'The items shown on the Quality Available column are available & can be delivered immediately after receipt of ' +
    'order confirmation from your end. (Subject to availability on first come first served basis)<br>Remaining items ' +
    'can be delivered 12-14 weeks after receipt of order confirmation from your end.'];

  constructor(private fb: FormBuilder,
              private quotationService: QuotationsService,
              private activatedRoute: ActivatedRoute,
              private snackBar: MatSnackBar,
              public location: Location,
              public dialog: MatDialog,
              public router: Router) {
    this.permission = AuthService.permission;
    if (!this.permission.qms.qms_update) {
      this.router.navigate(['404']);
    }
  }

  ngOnInit() {
    this.loading = false;
    this.progressValue = 100;
    this.buildForm();
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.quotationService.getSingleQuotation(this.id).subscribe(quotationData => {
        this.showSpinner = false;
        this.quotation = quotationData;
        const productArray = this.fb.array([]);
        if (this.quotation.productList.length === 0) {
          productArray.push(this.makeProductFormGroup());
        }
        quotationData.productList.forEach(prdt => {
          productArray.push(this.fb.group({
            productId: null,
            productName: [prdt.productName, Validators.required],
            productPartNumber: [prdt.productPartNumber, Validators.required],
            internalPartNumber: [prdt.internalPartNumber, Validators.required],
            productType: [prdt.productType, Validators.required],
            productQty: [prdt.productQty, Validators.required],
            productQtyAvailable: [prdt.productQtyAvailable, Validators.required],
            productUnit: [prdt.productUnit, Validators.required],
            productPrice: [prdt.productPrice, Validators.required],
            productDescription: [prdt.productDescription, Validators.required],
            totalPrice: [prdt.productQty * prdt.productPrice, Validators.required]
          }));
        });
        let pdfGroup;
        if (this.quotation.doc) {
          pdfGroup = this.fb.group({
            pdfId: [this.quotation.doc.pdfId],
            pdfSubject: [this.quotation.doc.pdfSubject, Validators.required],
            pdfBody: [this.quotation.doc.pdfBody, Validators.required],
            pdfVat: [this.quotation.doc.pdfVat, Validators.required],
            suggestion: [this.quotation.doc.suggestion, Validators.required]
          });
        } else {
          pdfGroup = this.makePdfContent();
        }

        this.updateQuotationForm.setControl('generatePdf', pdfGroup);

        this.updateQuotationForm.patchValue({
          id: this.id,
          date: new Date(Number(this.quotation.date) * 1000),
          quotaNo: this.quotation.quotaNo,
          quotaRef: this.quotation.quotaRef,
          companyName: this.quotation.companyName,
          branchName: this.quotation.branchName,
          branchAddress: this.quotation.address,
          contactPerson: this.quotation.contactPerson,
          personId: this.quotation.personId,
          designation: this.quotation.designation,
          status: this.quotation.status,
          contactBy: this.quotation.contactBy,
          contactByUserId: this.quotation.contactByUserId,
          contactByUsername: this.quotation.contactByUsername,
          contactByDesignation: this.quotation.contactByDesignation,
          contactByPhone: this.quotation.contactByPhone,
          remarks: this.quotation.remarks,
        });
        this.updateQuotationForm.setControl('productList', productArray);


        const termsArray = this.fb.array([]);
        if (quotationData.terms) {
          quotationData.terms.forEach(data => {
            termsArray.push(this.fb.group({
              topic: [data.topic, Validators.required],
              message: [data.message, Validators.required]
            }));
          });
        } else {
          termsArray.push(this.fb.group({
            topic: ['', Validators.required],
            message: ['', Validators.required]
          }));
        }
        this.updateQuotationForm.setControl('termsCondition', termsArray);
      });
    });
  }

  buildForm() {
    this.updateQuotationForm = this.fb.group({
      id: ['', Validators.required],
      date: [new Date(), Validators.required],
      quotaNo: ['', Validators.required],
      quotaRef: [''],
      companyName: ['', Validators.required],
      branchName: ['', Validators.required],
      branchAddress: ['', Validators.required],
      contactPerson: ['', Validators.required],
      personId: ['', Validators.required],
      designation: ['', Validators.required],
      status: ['', Validators.required],
      contactBy: ['', Validators.required],
      contactByUserId: ['', Validators.required],
      contactByUsername: ['', Validators.required],
      contactByDesignation: ['', Validators.required],
      contactByPhone: ['', Validators.required],
      remarks: [''],
      productList: this.fb.array([]),
      generatePdf: this.makePdfContent(),
      termsCondition: this.fb.array([])
    });
  }

  addProductToProductList() {
    (this.updateQuotationForm.get('productList') as FormArray).push(this.makeProductFormGroup());
  }

  removeProductFromProductList(index: number) {
    (this.updateQuotationForm.get('productList') as FormArray).removeAt(index);
  }

  addTerms() {
    (this.updateQuotationForm.get('termsCondition') as FormArray).push(this.makeTermsConditionForm());
  }

  removeTerms(index: number) {
    (this.updateQuotationForm.get('termsCondition') as FormArray).removeAt(index);
  }

  addPdfInfo() {
    this.updateQuotationForm.setControl('generatePdf', this.makePdfContent());
  }

  makeProductFormGroup(): FormGroup {
    return this.fb.group({
      productId: [null],
      productName: ['', Validators.required],
      productPartNumber: ['', Validators.required],
      internalPartNumber: ['', Validators.required],
      productType: ['', Validators.required],
      productQty: [1, Validators.required],
      productQtyAvailable: [1, Validators.required],
      productUnit: ['', Validators.required],
      productPrice: ['', Validators.required],
      productDescription: ['', Validators.required],
      totalPrice: [null]
    });
  }

  makePdfContent(): FormGroup {
    return this.fb.group({
      pdfId: [null],
      pdfSubject: ['', Validators.required],
      pdfBody: ['', Validators.required],
      pdfVat: [0, Validators.required],
      suggestion: ['', Validators.required]
    });
  }

  makeTermsConditionForm(): FormGroup {
    return this.fb.group({
      topic: ['', Validators.required],
      message: ['', Validators.required]
    });
  }


  saveQuotation() {
    this.loading = true;
    const upDt = this.updateQuotationForm.value;
    if (!/^\d+$/.test(this.updateQuotationForm.value.date)) {
      upDt.date = Math.trunc(this.updateQuotationForm.value.date.getTime() / 1000);
    }
    this.quotationService.updateQuotation(upDt).subscribe(data => {
      this.step++;
      this.loading = false;
      if (this.historyId) {
        this.quotationService.updateHistory(upDt, this.historyId).subscribe(historyPrdt => {
          this.snackBar.open(data.message, 'Close', {
            duration: 2000,
          });
        });
      } else {
        this.quotationService.saveHistory(upDt).subscribe(historyData => {
          this.historyId = historyData.id;
        });
      }
      if (this.step === 4) {
        this.router.navigate(['quotations']);
      }
      this.snackBar.open(data.message, 'Close', {
        duration: 2000,
      });
    });
  }

  pickProduct(product) {
    this.quotationService.getProductByName(product).subscribe(data => {
      this.SearchProduct = data;
      this.showAddProductLink1 = this.SearchProduct.length === 0;
    });
  }

  pickProductByPart(part) {
    this.quotationService.getProductByPart(part).subscribe(data => {
      this.SearchProduct = data;
      this.showAddProductLink2 = this.SearchProduct.length === 0;
    });
  }

  selectProduct(prdt: Products, index: number, productQty) {
    (this.updateQuotationForm.get('productList') as FormArray).setControl(index, this.fb.group({
      productId: [null],
      productName: [prdt.productName, Validators.required],
      productPartNumber: [prdt.productPartNumber, Validators.required],
      internalPartNumber: [prdt.productPartNumber, Validators.required],
      productType: [prdt.productType, Validators.required],
      productQty: [productQty],
      productQtyAvailable: [productQty],
      productUnit: ['', Validators.required],
      productPrice: [prdt.productPrice, Validators.required],
      productDescription: [prdt.productDescription, Validators.required],
      totalPrice: [productQty * prdt.productPrice]
    }));
  }

  openProductForm() {
    const dialogRef = this.dialog.open(AddProductDialogComponent, {
      width: '800px',
      height: 'auto',
      data: null
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  focusStatus(index) {
    this.activeProductLink = null;
    this.activeProductLink = index;
  }

  pickCompany(name) {
    this.quotationService.getClientBySearch(name).subscribe(data => {
      this.searchClient = data;
      this.showAddCompanyLink = this.searchClient.length === 0;
    });
  }

  selectClient(company: Client) {
    this.showAddBranchLink = false;
    this.companyId = company.companyId;
    this.branch = company.branch;
    this.filteredBranch = this.branch;
    this.updateQuotationForm.get('branchName').setValue('');
    this.updateQuotationForm.get('branchAddress').setValue('');
    this.updateQuotationForm.get('contactPerson').setValue('');
    this.updateQuotationForm.get('designation').setValue('');
  }

  selectBranch(branch: Branch) {
    this.contact = branch.contactPerson;
    this.branchId = branch.branchId;
    this.filteredContact = this.contact;
    this.updateQuotationForm.get('branchAddress').setValue(branch.branchAddress);
    this.showAddPersonLink = false;
  }

  openCompanyForm() {
    const dialogRef = this.dialog.open(AddCompanyDialogComponent, {
      width: '1000px',
      height: 'auto',
      data: null
    });
    dialogRef.afterClosed().subscribe(result => {
      this.selectClient(result);
      this.updateQuotationForm.get('companyName').setValue(result.companyName);
      this.updateQuotationForm.get('branchName').setValue(result.branch[0].branchName);
      this.updateQuotationForm.get('branchAddress').setValue(result.branch[0].branchAddress);
      this.updateQuotationForm.get('contactPerson').setValue(result.branch[0].contactPerson[0].personName);
      this.updateQuotationForm.get('designation').setValue(result.branch[0].contactPerson[0].personDesignation);
      this.updateQuotationForm.get('branchAddress').enable();
      this.updateQuotationForm.get('contactPerson').enable();
      this.updateQuotationForm.get('designation').enable();
      this.showAddCompanyLink = false;
      this.showAddPersonLink = false;
      this.showAddBranchLink = false;
    });
  }

  openBranchForm() {
    const dialogRef = this.dialog.open(AddBranchDialogComponent, {
      width: '1000px',
      height: 'auto',
      data: this.companyId
    });
    dialogRef.afterClosed().subscribe(result => {
      this.updateQuotationForm.get('branchName').setValue(result.branchName);
      this.updateQuotationForm.get('branchAddress').setValue(result.branchAddress);
      this.updateQuotationForm.get('contactPerson').setValue(result.contactPerson[0].personName);
      this.updateQuotationForm.get('designation').setValue(result.contactPerson[0].personDesignation);
      this.updateQuotationForm.get('branchAddress').enable();
      this.updateQuotationForm.get('contactPerson').enable();
      this.updateQuotationForm.get('designation').enable();
      this.showAddCompanyLink = false;
      this.showAddPersonLink = false;
      this.showAddBranchLink = false;
    });
  }


  pickBranch(branchName) {
    if (this.branch) {
      this.filteredBranch = this.branch.filter(branch => branch.branchName.toLowerCase().indexOf(branchName.toLowerCase()) !== -1);
      this.showAddBranchLink = this.filteredBranch.length === 0;
    }
  }

  pickContact(personName) {
    if (this.contact) {
      this.filteredContact = this.contact.filter(contact => contact.personName.toLowerCase().indexOf(personName.toLowerCase()) !== -1);
    }
    this.showAddPersonLink = this.filteredContact.length === 0;
  }

  selectPerson(person: Contact) {
    this.updateQuotationForm.get('designation').setValue(person.personDesignation);
  }

  openContactForm() {
    const dialogRef = this.dialog.open(AddContactDialogComponent, {
      width: '1000px',
      height: 'auto',
      data: this.branchId
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  filterContactBy(name: string) {
    this.quotationService.filterUserForContactBy(name).subscribe(data => {
      this.allUser = data;
    });
  }

  quantityInputed(value, index: number) {
    const amount = (this.updateQuotationForm.get('productList') as FormArray).at(index).get('productPrice').value;
    const total = value * amount;
    (this.updateQuotationForm.get('productList') as FormArray).at(index).get('totalPrice').setValue(total);
  }

  productPriceInputed(value, index: number) {
    const amount = (this.updateQuotationForm.get('productList') as FormArray).at(index).get('productQty').value;
    const total = value * amount;
    (this.updateQuotationForm.get('productList') as FormArray).at(index).get('totalPrice').setValue(total);
  }

  pickType(productType: any) {
    this.quotationService.getType(productType).subscribe(data => {
      this.SearchProduct = data;
      this.showAddProductLink3 = this.SearchProduct.length === 0;
    });
  }

  selectContactBy(user: any) {
    this.updateQuotationForm.get('contactByUserId').setValue(user.userId);
    this.updateQuotationForm.get('contactByUsername').setValue(user.username);
    this.updateQuotationForm.get('contactByDesignation').setValue(user.designations[0].title);
    this.updateQuotationForm.get('contactByPhone').setValue(user.phones[0].number);
  }

  // Expansion panel settings
  setStep(index: number) {
    this.step = index;
  }

  prevStep() {
    this.step--;
  }
}
