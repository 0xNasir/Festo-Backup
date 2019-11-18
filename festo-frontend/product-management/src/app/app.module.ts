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
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { ManageProductComponent } from './component/manage-product/manage-product.component';
import {
  MatCardModule, MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSnackBarModule, MatSortModule, MatTooltipModule
} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import { AddProductComponent } from './component/add-product/add-product.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UpdateProductComponent } from './component/update-product/update-product.component';
import {ProductDialogComponent} from './dialog/product/product.dialog.component';
import {AuthGuard} from './security/auth-guard';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {RevisionDialogComponent} from './dialog/product-revision/revision.dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    ManageProductComponent,
    AddProductComponent,
    UpdateProductComponent,
    ProductDialogComponent,
    PageNotFoundComponent,
    DashboardComponent,
    RevisionDialogComponent
  ],
  entryComponents: [
    ProductDialogComponent,
    RevisionDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatSnackBarModule,
    MatSelectModule,
    MatDialogModule,
    MatMenuModule,
    MatTooltipModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
