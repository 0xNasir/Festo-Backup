import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {MatSnackBar} from '@angular/material';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  /**
   * Variable declaration
   */
  form: FormGroup;
  permission: any;
  public categories = ['Plastic Tubing', 'Pneumatic Fitting & Connector', 'Valves', 'Valves - Special', 'Coil',
    'Linear Cylinders', 'Rotary Cylinders', 'Filter Regulator', 'Service Unit', 'Filter', 'Filter Cartridge',
    'Pressure Regulator', 'Media Sensors', 'Position Sensors', 'Vacuum Generator', 'Suction Cup' +
    'Pressure Switch', 'Silencer', 'Others'];
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    public location: Location,
    private snackBar: MatSnackBar
  ) {
    this.permission = AuthService.permission;
    /**
     * Checking the logged in user if he has permission to view this page or not
     * If he has no permission, redirect to 404 page.
     */
    if (!this.permission.pms.pms_create) {
      this.router.navigate(['401']);
    }
  }

  ngOnInit() {
    /**
     * Generating the form with necessary control and valodation
     */
    this.form = this.fb.group({
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

  /**
   * When the user submit the form, this function will be invoked
   */
  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    /**
     * Call the service function to store the product data at URL
     * http://127.0.0.1/festo/product-management/
     */
    this.productService.storeProduct(this.form.value).subscribe(data => {
      this.snackBar.open(data['message'], 'Close', {
        duration: 2000
      });
      if (data['injected']) {
        this.router.navigate(['/products']);
      }
    });
  }
}
