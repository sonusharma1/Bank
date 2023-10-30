import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { NameValidator } from '../NameValidator';
import { AuthService } from '../service/auth.service';
import { User } from '../user';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  form = new FormGroup({

    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    address: new FormControl("", [Validators.required, Validators.maxLength(50)]),
    adharno: new FormControl("", [Validators.required, Validators.minLength(12), Validators.maxLength(12)]),
    panno: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    phone: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    // uname: new FormControl("", [Validators.required, Validators.minLength(2)]),
    // pass: new FormControl("", [Validators.required, Validators.minLength(6)]),
    at: new FormControl("", [Validators.required, Validators.minLength(1)]),
    abal: new FormControl('', [Validators.required, Validators.min(500)])


  });


  get f() {
    return this.form.controls;
  };

  customer: Customer = new Customer();
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.customer.userName=this.customer.customerName;
    this.customer.password=this.customer.accountDetail.accountNumber+"";
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
