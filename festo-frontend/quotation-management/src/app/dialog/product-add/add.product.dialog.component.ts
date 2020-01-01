import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QuotationsService} from '../../services/quotations.service';

@Component({
  selector: 'app-quotations',
  templateUrl: 'add.product.dialog.html',
  styleUrls: ['./add.product.dialog.style.css']
})
export class AddProductDialogComponent implements OnInit {
  form: FormGroup;
  public categories = ['Plastic Tubing', 'Pneumatic Fitting & Connector', 'Valves', 'Valves - Special', 'Coil',
    'Linear Cylinders', 'Rotary Cylinders', 'Filter Regulator', 'Service Unit', 'Filter', 'Filter Cartridge',
    'Pressure Regulator', 'Media Sensors', 'Position Sensors', 'Vacuum Generator', 'Suction Cup' +
    'Pressure Switch', 'Silencer', 'Others'];

  constructor(
    private service: QuotationsService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      productName: ['', Validators.required],
      productPartNo: ['', Validators.required],
      productType: ['', Validators.required],
      productCategory: ['', Validators.required],
      productDescription: ['', Validators.required],
      productPrice: ['0'],
      productBasePrice: ['0'],
      productInStock: ['', Validators.required],
      productUuq: ['0'],
      productLoan: ['0'],
      productBooking: ['0'],
      productOrigin: ['']
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.service.storeProduct(this.form.value).subscribe(data => {
      if (data['injected']) {
        this.dialogRef.close(this.form.value);
        this.snackBar.open(data['message'], 'Close', {
          duration: 2000,
        });
      } else {
        this.snackBar.open(data['message'], 'Close', {
          duration: 2000,
        });
      }
    });
  }
}
