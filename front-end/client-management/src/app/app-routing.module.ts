import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ManageClientComponent} from './component/manage-client/manage-client.component';
import {AddClientComponent} from './component/add-client/add-client.component';
import {UpdateClientComponent} from './component/update-client/update-client.component';
import {BrowseByContactBranchComponent} from './component/browse-by-contact-branch/browse-by-contact-branch.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {AuthGuard} from './security/auth.guard';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'client', component: ManageClientComponent, canActivate: [AuthGuard]},
  {path: 'client/add', component: AddClientComponent, canActivate: [AuthGuard]},
  {path: 'client/update/:id', component: UpdateClientComponent, canActivate: [AuthGuard]},
  {path: 'browse/:browseBy', component: BrowseByContactBranchComponent, canActivate: [AuthGuard]},
  {path: '', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
