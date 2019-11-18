import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar, MatTableDataSource} from '@angular/material';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';

@Component({
  templateUrl: 'revision.dialog.html',
  styleUrls: ['./dialog.style.css']
})
export class RevisionDialogComponent {
  public form: FormGroup;
  displayedColumns: string[];

  constructor(
    public dialogRef: MatDialogRef<RevisionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private productService: ProductService,
    private matSnackBar: MatSnackBar
  ) {
    if (data.mType === 'price') {
      this.displayedColumns = ['date', 'price'];
    } else if (data.mType === 'out') {
      this.form = this.fb.group({
        productId: [data.content.productId, Validators.required],
        productQuantity: ['', [Validators.required, Validators.max(data.content.productInStock), Validators.min(1)]],
        type: ['out']
      });
    } else if (data.mType === 'in') {
      this.form = this.fb.group({
        productId: [data.content.productId, Validators.required],
        productQuantity: ['', [Validators.required, Validators.min(1)]],
        type: ['in']
      });
    } else {
      this.displayedColumns = ['date', 'quantity'];
    }
  }
  onClose(): void {
    if (this.data.mType === 'out') {
      if (this.form.value.productQuantity <= this.data.content.productInStock) {
        if (this.form.invalid) {
          return;
        }
        this.productService.manageStock(this.form.value).subscribe(data => {
          this.matSnackBar.open(data['message'], 'Close', {
            duration: 2000
          });
          this.dialogRef.close(this.data.content.productId);
        });
      } else {
        this.matSnackBar.open('Invalid product amount. Please enter amount less or equal to the stock amount.', 'Close', {
          duration: 5000
        });
      }
    } else if (this.data.mType === 'in') {
      if (this.form.invalid) {
        return;
      }
      this.productService.manageStock(this.form.value).subscribe(data => {
        this.matSnackBar.open(data['message'], 'Close', {
          duration: 2000
        });
        this.dialogRef.close(this.data.content.productId);
      });
    } else {
      this.dialogRef.close(this.data.content.productId);
    }
  }
}
