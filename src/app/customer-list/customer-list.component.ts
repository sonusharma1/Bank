import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent {
  customers: Customer[] | undefined;
  dummyArray: Customer[] | undefined;
  searchName !: string;

  /////////////////////////
  errClass!: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCustomer();
  }

  private getAllCustomer() {
    this.authService.getAllCustomer().subscribe((data) => {
      this.customers = data;
      this.dummyArray = data;
    });

    //////////////////////////
    this.errClass = "no-error";

  }

  viewCustomer(accountNumber: number) {
    this.router.navigate(['viewcustomer', accountNumber]);
  }

  customerBalance(accountNumber: number) {
    this.router.navigate(['checkbalance', accountNumber]);
  }

  search() {
    ///////////////////////////////
    this.errClass = "no-error";

    this.customers = this.dummyArray;
    if (this.searchName.length == 0) {
      this.getAllCustomer();
    }

    // this.customers = [];
    this.customers = this.customers?.filter(c => {
      return c.customerName.toLowerCase().includes(this.searchName.toLowerCase());
    })

    ///////////////////////////////
    if (this.customers?.length == 0) {
      this.errClass = "error";
    }
  }

  updateCustomer(accountNumber: number) {
    this.router.navigate(['update', accountNumber]);
  }

  deleteCustomer(accountNumber: number) {
    this.authService.deleteCustomer(accountNumber).subscribe(
      data => {
        console.log(data);
        window.location.reload();
        // this.goToCustomerList();
      }
    );
    window.location.reload();
  }

  goToCustomerList() {
    this.router.navigate(['/customerlist']);
  }
}
