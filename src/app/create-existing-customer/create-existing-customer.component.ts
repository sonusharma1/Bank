import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-create-existing-customer',
  templateUrl: './create-existing-customer.component.html',
  styleUrls: ['./create-existing-customer.component.css']
})
export class CreateExistingCustomerComponent {
  successClass!: string;
  customerAdharNo!: string;

  form1 = new FormGroup({
    adharno: new FormControl("", [Validators.required, Validators.minLength(12), Validators.maxLength(12)]),
  });

  get f1() {
    return this.form1.controls;
  };

  
  form = new FormGroup({

    // name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    // address: new FormControl("", [Validators.required, Validators.maxLength(50)]),
    // adharno: new FormControl("", [Validators.required, Validators.minLength(12), Validators.maxLength(12)]),
    // panno: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    // phone: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    // email: new FormControl("", [Validators.required, Validators.email]),
    // uname: new FormControl("", [Validators.required, Validators.minLength(2)]),
    // pass: new FormControl("", [Validators.required, Validators.minLength(6)]),
    at: new FormControl("", [Validators.required, Validators.minLength(1)]),
    abal: new FormControl('', [Validators.required, Validators.min(500)])
  });


  get f() {
    return this.form.controls;
  };

  existingCustomer:Customer = new Customer();
  customer: Customer = new Customer();
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService, private router: Router) { }

  onError() {
    this.successClass = 'success_msg';
    window.setTimeout(() => {
      this.successClass = '';
    }, 2000);
  }

  onSubmitAdhar() {
    this.authService.getCustAdhar(this.customerAdharNo).subscribe(
      data => {
        console.log("success");
        this.existingCustomer=data;
      },
      err => {
        if (err.error.status == 500) {
          this.onError();
        }
      }
    )
  }

  onSubmit() {
    this.customer.customerName=this.existingCustomer.customerName;
    this.customer.customerAddress=this.existingCustomer.customerAddress;
    this.customer.customerPhone=this.existingCustomer.customerPhone;
    this.customer.customerEmail=this.existingCustomer.customerEmail;
    this.customer.customerPanNo=this.existingCustomer.customerPanNo;
    this.customer.customerAdharNo=this.existingCustomer.customerAdharNo;
    this.customer.userName=this.existingCustomer.userName;
    this.customer.password=this.existingCustomer.password;


    this.authService.register(this.customer).subscribe(
      data => {
        console.log('SUCCESS', data);
        this.goToCustomerList();
        this.isSuccessful = true;
        this.isSignUpFailed = false;

      },
      err => {
        console.log('FAILURE STATUS', err);
        this.goToCustomerList();
        this.isSuccessful = false;
        this.isSignUpFailed = true;
      }
    );


  }

  goToCustomerList() {
    this.router.navigate(['/customerlist']);
  }
}
