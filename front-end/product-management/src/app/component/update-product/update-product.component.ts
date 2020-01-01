import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {MatSnackBar} from '@angular/material';
import {Product} from '../../plain-object/product';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  form: FormGroup;
  id: string;
  product: Product;
  permission: any;
  dirty: boolean;
  public categories = ['Plastic Tubing', 'Pneumatic Fitting & Connector', 'Valves', 'Valves - Special', 'Coil',
    'Linear Cylinders', 'Rotary Cylinders', 'Filter Regulator', 'Service Unit', 'Filter', 'Filter Cartridge',
    'Pressure Regulator', 'Media Sensors', 'Position Sensors', 'Vacuum Generator', 'Suction Cup' +
    'Pressure Switch', 'Silencer', 'Others'];

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private activatedRouter: ActivatedRoute,
    public location: Location,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.permission = AuthService.permission;
    if (!this.permission.pms.pms_update) {
      this.router.navigate(['401']);
    }
  }

  ngOnInit() {
    this.dirty = false;
    this.buildForm();
    this.activatedRouter.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.productService.getSingleProduct(this.id).subscribe(data => {
        this.product = data;
        this.form.patchValue({
          productId: this.id,
          productName: this.product.productName,
          productPartNo: this.product.productPartNo,
          productType: this.product.productType,
          productCategory: this.product.productCategory,
          productDescription: this.product.productDescription,
          productPrice: this.product.productPrice,
          productBasePrice: this.product.productBasePrice,
          productInStock: this.product.productInStock,
          productUuq: this.product.productUuq,
          productLoan: this.product.productLoan,
          productBooking: this.product.productBooking,
          productOrigin: this.product.productOrigin
        });
      });
    });
  }

  buildForm() {
    this.form = this.fb.group({
      productId: ['', Validators.required],
      productName: ['', Validators.required],
      productPartNo: ['', Validators.required],
      productType: ['', Validators.required],
      productCategory: ['', Validators.required],
      productDescription: ['', Validators.required],
      productPrice: ['', [Validators.required, Validators.min(0)]],
      productBasePrice: ['', [Validators.required, Validators.min(0)]],
      productInStock: ['', [Validators.required, Validators.min(0)]],
      productUuq: [0, [Validators.required, Validators.min(0)]],
      productLoan: [0, [Validators.required, Validators.min(0)]],
      productBooking: [0, [Validators.required, Validators.min(0)]],
      productOrigin: ['']
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.productService.updateProduct(this.form.value).subscribe(data => {
      this.snackBar.open(data['message'], 'Close', {
        duration: 3000
      });
      if (data['updated']) {
        this.router.navigate(['products']);
      } else {
        if (data['duplicate']) {
          this.dirty = true;
        }
      }
    });
  }

}
