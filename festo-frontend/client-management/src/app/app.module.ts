import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ManageClientComponent } from './component/manage-client/manage-client.component';
import { AddClientComponent } from './component/add-client/add-client.component';
import { UpdateClientComponent } from './component/update-client/update-client.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatCardModule, MatDialogModule,
  MatFormFieldModule,
  MatInputModule, MatMenuModule,
  MatPaginatorModule, MatSelectModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule, MatTooltipModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { BranchDialogComponent } from './dialog/branch-dialog/branch-dialog.component';
import {BrowseByContactBranchComponent} from './component/browse-by-contact-branch/browse-by-contact-branch.component';
import { ContactDialogComponent } from './dialog/contact-dialog/contact-dialog.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {AuthGuard} from './security/auth.guard';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    ManageClientComponent,
    AddClientComponent,
    UpdateClientComponent,
    BranchDialogComponent,
    BrowseByContactBranchComponent,
    ContactDialogComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    FormsModule,
    MatSelectModule,
    MatMenuModule,
    MatTooltipModule
  ],
  entryComponents: [
    BranchDialogComponent,
    ContactDialogComponent
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
