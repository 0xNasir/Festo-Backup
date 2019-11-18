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
  form: FormGroup;
  permission: any;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    public location: Location,
    private snackBar: MatSnackBar
  ) {
    this.permission = AuthService.permission;
    if (!this.permission.pms.pms_create) {
      this.router.navigate(['401']);
    }
  }

  ngOnInit() {
    this.form = this.fb.group({
      productName: ['', Validators.required],
      productPartNo: ['', Validators.required],
      productType: ['', Validators.required],
      productCategory: ['', Validators.required],
      productDescription: ['', Validators.required],
      productPrice: ['', Validators.required],
      productInStock: ['', Validators.required],
      productUuq: [0, Validators.required],
      productLoan: [0, Validators.required],
      productBooking: [0, Validators.required],
      productOrigin: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
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
