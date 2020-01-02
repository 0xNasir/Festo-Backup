import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ManageQuotationComponent} from './quotations/manage-quotation/manage-quotation.component';
import {AddQuotationComponent} from './quotations/add-quotation/add-quotation.component';
import {UpdateQuotationComponent} from './quotations/update-quotation/update-quotation.component';
import {DashboardComponent} from './quotations/dashboard/dashboard.component';
import {AuthGuard} from './security/auth-guard';
import {PageNotFoundComponent} from './quotations/page-not-found/page-not-found.component';
import {AddRevisedQuotationComponent} from './quotations/add-revised-quotation/add-revised-quotation.component';
import {ManageHistoryComponent} from './quotations/manage-history/manage-history.component';
import {NotificationComponent} from './quotations/notification/notification.component';


const routes: Routes = [
  {path: '', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'quotations', component: ManageQuotationComponent, canActivate: [AuthGuard]},
  {path: 'quotations/status/:status', component: ManageQuotationComponent, canActivate: [AuthGuard]},
  {path: 'quotations/staff/:staff', component: ManageQuotationComponent, canActivate: [AuthGuard]},
  {path: 'quotation/add', component: AddQuotationComponent, canActivate: [AuthGuard]},
  {path: 'quotation/update/:id', component: UpdateQuotationComponent, canActivate: [AuthGuard]},
  {path: 'quotation/revise/:id/add', component: AddRevisedQuotationComponent, canActivate: [AuthGuard]},
  {path: 'quotation/history/:id', component: ManageHistoryComponent, canActivate: [AuthGuard]},
  {path: 'notification', component: NotificationComponent, canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
