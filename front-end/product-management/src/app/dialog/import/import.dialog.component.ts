import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import * as Papa from 'papaparse';
import {ProductService} from '../../service/product.service';

@Component({
  templateUrl: 'import.dialog.html',
  styleUrls: ['./dialog.style.css']
})
export class ImportDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ImportDialogComponent>,
    public productService: ProductService,
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }


  onClose(): void {
    this.dialogRef.close();
  }

  onFileChanged(files: File[]) {
    Papa.parse(files[0], {
      header: true,
      skipEmptyLines: true,
      complete: (result, file) => {
        const day = file.name.substr(file.name.length - 6, 2);
        const month = file.name.substr(file.name.length - 8, 2);
        const year = file.name.substr(file.name.length - 12, 4);
        const epochDate = new Date(month + ' ' + day + ', ' + year + ' 12:00:00');
        result.Date = epochDate.getTime() / 1000.0;
        this.productService.importProduct(result).subscribe(dts => {
          this.snackBar.open(dts.message, 'Close', {
            duration: 2000
          });
          this.dialogRef.close(dts.injected);
        });
      }
    });
  }
}
