import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BaseLayoutComponent} from './share/layout/base-layout/base-layout.component';
import {AuthGuard} from './share/security/auth-guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: BaseLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./component/content/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'my-activity',
        loadChildren: () => import('./component/content/my-activity/my-activity.module').then(m => m.MyActivityModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
