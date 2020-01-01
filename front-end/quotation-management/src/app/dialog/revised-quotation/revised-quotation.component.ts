import {Component, Inject, OnInit} from '@angular/core';
import {RevisionService} from '../../services/revision.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Quotations} from '../../plain-object/quotations';
import {RedirectService} from '../../services/redirect.service';

@Component({
  selector: 'app-revised-quotation',
  templateUrl: './revised-quotation.component.html',
  styleUrls: ['./revised-quotation.component.css']
})
export class RevisedQuotationComponent {

  displayedColumns: string[] = ['date', 'company',
    'contact', 'cumulativePrice', 'status',
    'person', 'remarks', 'action'];

  constructor(
    public opentab: RedirectService,
    public dialogRef: MatDialogRef<RevisedQuotationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  onClose(): void {
    this.dialogRef.close();
  }

  OpenRevisionPdf(element: Quotations) {
    this.opentab.post(element, 'http://127.0.0.1/quotation-management/?api=pdf/festo_revision');
  }

  formatedPrice(str: string) {
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
  }
}
