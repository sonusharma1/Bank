import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-create-customer-options',
  templateUrl: './create-customer-options.component.html',
  styleUrls: ['./create-customer-options.component.css']
})
export class CreateCustomerOptionsComponent {
  constructor(private authService: AuthService, private router: Router) { }

  existingCustomer(){
    this.router.navigate(['/createaccount/existingcustomer']);
  }

  newCustomer(){
    this.router.navigate(['/createaccount/newcustomer']);
  }


}
