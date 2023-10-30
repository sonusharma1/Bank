import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CheckBalanceComponent } from './check-balance/check-balance.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { LoginComponent } from './login/login.component';
import { authInterceptorProviders } from './service/auth-interceptor.service';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';

import { DataTablesModule } from 'angular-datatables';
import { UpdateComponent } from './update/update.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { CreateCustomerOptionsComponent } from './create-customer-options/create-customer-options.component';
import { CreateExistingCustomerComponent } from './create-existing-customer/create-existing-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CreateCustomerComponent,
    CheckBalanceComponent,
    CustomerdetailComponent,
    LoginComponent,
    DepositComponent,
    WithdrawComponent,
    FundtransferComponent,
    UpdateComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    CreateCustomerOptionsComponent,
    CreateExistingCustomerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
