import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  customer: Customer= new Customer();
  accountNumber !: number;
  
  form = new FormGroup({

    name: new FormControl("",[Validators.required,Validators.minLength(3)]),
      address: new FormControl("",[Validators.required,Validators.maxLength(20)]),
      adharno: new FormControl("",[Validators.required,Validators.minLength(12),Validators.maxLength(12)]),
      panno: new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      phone: new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      email: new FormControl("",[Validators.required,Validators.email]),
      uname: new FormControl("",[Validators.required,Validators.minLength(2)]),
      pass: new FormControl("",[Validators.required,Validators.minLength(6)]),
      at:new FormControl("",[Validators.required,Validators.maxLength(2)]),
      abal:new FormControl("",[Validators.required,Validators.minLength(3)])
  
   });

   get f(){
    return this.form.controls;
   };

  constructor(private authService: AuthService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.accountNumber=this.route.snapshot.params['accountNumber'];
    this.authService.getCustomerById(this.accountNumber).subscribe(
      data=>{
        this.customer=data;
      }
    );
  }

  onSubmit(){
    this.authService.update(this.accountNumber,this.customer).subscribe(
      data=>{
        this.goToCustomerList();
        
      },
      error=>console.log(error)
      
    );
  

  }
  goToCustomerList()
  {
    this.router.navigate(['/customerlist']);
  }
}