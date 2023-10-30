import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-fundtransfer',
  templateUrl: './fundtransfer.component.html',
  styleUrls: ['./fundtransfer.component.css']
})
export class FundtransferComponent implements OnInit {
  form = new FormGroup({
    acc: new FormControl("",[Validators.required,Validators.minLength(10)]),
    amt: new FormControl("",[Validators.required]),
    dsc: new FormControl("",[Validators.required])
  });

  get f(){
    return this.form.controls;
   };

  senderAccountNumber !: number;
  receiverAccountNumber !: number;
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
    //   window.setTimeout(()=>{
      this.authService.fundtransfer(this.senderAccountNumber,this.receiverAccountNumber,this.amount,this.description).subscribe(
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
    // },1000);
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

