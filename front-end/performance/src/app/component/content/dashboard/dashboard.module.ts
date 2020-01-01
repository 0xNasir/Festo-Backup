import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
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
import {ActivityDialogComponent} from './activity-dialog/activity.dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivityDetailDialogComponent} from './detail-dialog/activity.detail.dialog.component';


@NgModule({
  declarations: [DashboardComponent, ActivityDialogComponent, ActivityDetailDialogComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
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
  entryComponents: [
    ActivityDialogComponent,
    ActivityDetailDialogComponent
  ]
})
export class DashboardModule {
}
