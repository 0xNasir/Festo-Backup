import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-quotations',
  templateUrl: 'product.dialog.html',
  styleUrls: ['./dialog.style.css']
})
export class ProductDialogComponent {
  displayedColumns: string[] = ['name', 'part_no', 'type', 'quantity', 'price', 'total_price', 'description'];

  constructor(
    public dialogRef: MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }


  onClose(): void {
    this.dialogRef.close();
  }

  formatedPrice(str: any, fraction: boolean) {
    if (fraction) {
      if (str.length > 6) {
        let ts = '';
        let i = 0;
        const preFormatterLength = str.length - 6;
        if (preFormatterLength % 2 === 1) {
          i = 1;
          ts = ts + str[0] + ',';
        } else {
          i = 0;
        }
        let comma = true;
        for (; i < preFormatterLength; i++) {
          if (comma) {
            comma = false;
            ts = ts + str[i];
          } else {
            comma = true;
            ts = ts + str[i] + ',';
          }
        }
        for (let j = str.length - 6; j < str.length; j++) {
          ts += str[j];
        }
        return ts;
      } else {
        return str;
      }
    } else {
      console.log(str);
      if (str.length > 3) {
        let ts = '';
        let i = 0;
        const preFormatterLength = str.length - 3;
        if (preFormatterLength % 2 === 1) {
          i = 1;
          ts = ts + str[0] + ',';
        } else {
          i = 0;
        }
        let comma = true;
        for (; i < preFormatterLength; i++) {
          if (comma) {
            comma = false;
            ts = ts + str[i];
          } else {
            comma = true;
            ts = ts + str[i] + ',';
          }
        }
        for (let j = str.length - 3; j < str.length; j++) {
          ts += str[j];
        }
        return ts;
      } else {
        return str;
      }
    }
  }
}
