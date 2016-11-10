import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MediaComponent } from './media/media.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AccountComponent } from './account/account.component';

import { ProductService } from './shared/product.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MediaComponent,
    ProductDetailComponent,
    AccountComponent,
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
