import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Customer } from '../customer';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  form = new FormGroup({
    acc: new FormControl("",[Validators.required,Validators.minLength(10)]),
    amt: new FormControl("",[Validators.required]),
    dsc: new FormControl("",[Validators.required])
  });

  get f(){
    return this.form.controls;
   };
  customer : Customer= new Customer();  
  accountNumber !: number;
  amount!: number;
  description !: string;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  
  
  constructor(private authService: AuthService,private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
         
  }

  onSubmit() {
    // this.onSucess();
      this.authService.deposit(this.accountNumber,this.description,this.amount).subscribe(
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
  
  // successClass!:string;

  // onSucess(){
  //   this.successClass='success_msg';

  //   window.setTimeout(()=>{
  //     window.location.reload();
  //   },2000);
  // }

  }
  


