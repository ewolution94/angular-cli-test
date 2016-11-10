import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MediaComponent } from './media/media.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'media', component: MediaComponent },
  { path: 'account', component: AccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
