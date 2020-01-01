import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../service/product.service';

@Component({
  templateUrl: 'emergency.product.price.dialog.html',
  styleUrls: ['./dialog.style.css']
})
export class EmergencyProductPriceDialogComponent {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private snackbar: MatSnackBar,
    public dialogRef: MatDialogRef<EmergencyProductPriceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = this.fb.group({
      productId: [this.data.productId, Validators.required],
      productPartNo: [this.data.productPartNo, Validators.required],
      productType: [this.data.productType, Validators.required],
      productPrice: [this.data.productPrice, [Validators.required, Validators.min(0)]],
    });
  }


  onClose(): void {
    this.dialogRef.close();
  }

  submitEmergencyProductPrice() {
    if (this.form.invalid) {
      return;
    }
    this.productService.updateEmergencyProductUpdate(this.form.value).subscribe(data => {
      this.snackbar.open(data.message, 'Close', {
        duration: 2000
      });
      if (data.updated) {
        this.dialogRef.close(data.updated);
      }
    });
  }
}
