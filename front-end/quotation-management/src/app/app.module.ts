import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainNavComponent} from './main-nav/main-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTooltipModule} from '@angular/material/tooltip';
import {
  MatAutocompleteModule,
  MatCardModule, MatCheckboxModule, MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatSelectModule, MatSnackBarModule, MatSortModule
} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {HttpClientModule} from '@angular/common/http';
import {ManageQuotationComponent} from './quotations/manage-quotation/manage-quotation.component';
import {AddQuotationComponent} from './quotations/add-quotation/add-quotation.component';
import {ProductDialogComponent} from './dialog/product/product.dialog.component';
import {UpdateQuotationComponent} from './quotations/update-quotation/update-quotation.component';
import { DashboardComponent } from './quotations/dashboard/dashboard.component';
import {AuthGuard} from './security/auth-guard';
import { PageNotFoundComponent } from './quotations/page-not-found/page-not-found.component';
import {AuthService} from './services/auth.service';
import {AddProductDialogComponent} from './dialog/product-add/add.product.dialog.component';
import {AddCompanyDialogComponent} from './dialog/company-add/add.company.dialog.component';
import {RedirectService} from './services/redirect.service';
import {AddBranchDialogComponent} from './dialog/branch-add/add.branch.dialog.component';
import {AddContactDialogComponent} from './dialog/contact-add/add.contact.dialog.component';
import { RevisedQuotationComponent } from './dialog/revised-quotation/revised-quotation.component';
import { AddRevisedQuotationComponent } from './quotations/add-revised-quotation/add-revised-quotation.component';
import { ManageHistoryComponent } from './quotations/manage-history/manage-history.component';
import { NotificationComponent } from './quotations/notification/notification.component';
@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    ManageQuotationComponent,
    AddQuotationComponent,
    ProductDialogComponent,
    AddProductDialogComponent,
    UpdateQuotationComponent,
    DashboardComponent,
    PageNotFoundComponent,
    AddCompanyDialogComponent,
    AddBranchDialogComponent,
    AddContactDialogComponent,
    RevisedQuotationComponent,
    AddRevisedQuotationComponent,
    ManageHistoryComponent,
    NotificationComponent
  ],
  entryComponents: [
    ProductDialogComponent,
    AddProductDialogComponent,
    AddCompanyDialogComponent,
    AddBranchDialogComponent,
    AddContactDialogComponent,
    RevisedQuotationComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressBarModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatExpansionModule,
    MatProgressSpinnerModule
  ],
  providers: [AuthGuard, AuthService, RedirectService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
