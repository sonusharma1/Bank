import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.css']
})
export class CustomerdetailComponent implements OnInit {

  accountNumber! : number;

  customers: Customer | undefined;

  constructor(private authService: AuthService, private router: Router , private route: ActivatedRoute){}
  ngOnInit(): void {
    this.customers= new Customer();
    this.accountNumber=this.route.snapshot.params['accountNumber'];
    this.authService.getCustomerById(this.accountNumber).subscribe(
      data=>{
        this.customers=data;
      }
    );
  }


}
