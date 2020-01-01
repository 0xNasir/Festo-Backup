import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MyActivityRoutingModule} from './my-activity-routing.module';
import {MyActivityComponent} from './my-activity.component';
import {MyactivityDialogComponent} from './myactivity-dialog/myactivity.dialog.component';
import {
  MatAutocompleteModule,
  MatButtonModule, MatCardModule, MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule, MatNativeDateModule,
  MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule, MatSnackBarModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivityDetailDialogComponent} from './myactivity-detail-dialog/activity.detail.dialog.component';


@NgModule({
  declarations: [MyActivityComponent, MyactivityDialogComponent, ActivityDetailDialogComponent],
  imports: [
    CommonModule,
    MyActivityRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatSelectModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule
  ],
  entryComponents: [MyactivityDialogComponent, ActivityDetailDialogComponent]
})
export class MyActivityModule {
}
