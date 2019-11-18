import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ManageProductComponent} from './component/manage-product/manage-product.component';
import {AddProductComponent} from './component/add-product/add-product.component';
import {UpdateProductComponent} from './component/update-product/update-product.component';
import {AuthGuard} from './security/auth-guard';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';


const routes: Routes = [
  {path: '', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'products', component: ManageProductComponent, canActivate: [AuthGuard]},
  {path: 'products/:param', component: ManageProductComponent, canActivate: [AuthGuard]},
  {path: 'product/add', component: AddProductComponent, canActivate: [AuthGuard]},
  {path: 'product/update/:id', component: UpdateProductComponent, canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
