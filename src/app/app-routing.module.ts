import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckBalanceComponent } from './check-balance/check-balance.component';
import { ContactComponent } from './contact/contact.component';
import { CreateCustomerOptionsComponent } from './create-customer-options/create-customer-options.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateExistingCustomerComponent } from './create-existing-customer/create-existing-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { DepositComponent } from './deposit/deposit.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const routes: Routes = [
  {path:"customerlist", component:CustomerListComponent},
  {path:"createaccount", component:CreateCustomerOptionsComponent},
  {path:"checkbalance/:accountNumber", component:CheckBalanceComponent},
  {path:"viewcustomer/:accountNumber", component:CustomerdetailComponent},
  {path:"login", component:LoginComponent},
  {path:"deposit",component:DepositComponent},
  {path:"withdraw",component:WithdrawComponent},
  {path:"fundtransfer",component:FundtransferComponent},
  {path:"update/:accountNumber",component:UpdateComponent},
  {path:"home",component:HomeComponent},
  { path: '', component: LoginComponent},
  {path:"contact",component:ContactComponent},
  {path:"createaccount/existingcustomer",component:CreateExistingCustomerComponent},
  {path:"createaccount/newcustomer",component:CreateCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
