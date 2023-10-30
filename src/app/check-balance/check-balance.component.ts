import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AccountDetail } from '../account-detail';
import { Customer } from '../customer';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.component.html',
  styleUrls: ['./check-balance.component.css']
})
export class CheckBalanceComponent implements OnInit  {

  customer!: Customer ;
  accountDetail= new AccountDetail();  
  accountBalance !: number;
  accountNumber !: number;
  message !: string

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  myArr: any[] = [];
  transactions: Transaction[] = [];

  /////////////////
  mssg!:string;

  constructor(private authService: AuthService,private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.customer= new Customer();
    this.accountNumber=this.route.snapshot.params['accountNumber'];
    this.authService.getCustomerById(this.accountNumber).subscribe(
      data=>{
        this.customer=data;
        this.getAllTransactions();
      }
    );
  }

  getAllTransactions() {
    ///////////////////////////////
    this.mssg="Loading...";

    this.authService.getTransactionHistory(this.customer.accountDetail.accountNumber).subscribe(data => {
      this.myArr = data.bankTransactions;
      for (let i = 0; i < this.myArr.length; i++) {
        // create object
        let s = new Transaction();
        let ty;

        s.desc = this.myArr[i].descriptionOfTransaction;
        s.amount = this.myArr[i].transactionAmount;
        s.transType = this.myArr[i].transactionType;
        s.img = Math.floor(Math.random() * 3),
          ty = this.myArr[i].transactionType;

        // date
        let date = new Date(this.myArr[i].dateOfTransaction);
        s.date = date.toDateString();

        // type
        if (ty == "Credited") {
          s.sign = '+';
          s.classType = "text-success";
        } else {
          s.sign = '-';
          s.classType = "text-danger";
        }

        // save the object
        this.transactions[i] = s;
      }
      this.myArr = this.transactions;
      ///////////////////////////////////////
      if(this.myArr.length==0){
        this.mssg="No transactions.";
      }else{
        this.mssg="";
      }
    })

  }
 
  sortBy(e: any) {
    this.transactions = this.myArr;
    const val = e.target.value;
    if (val == 'all') {
      this.transactions = this.myArr;
    }
    else if (val == 'debit') {
      this.transactions = this.transactions?.filter(t => {
        return t.transType.includes("Debited");
      })
    }
    else if (val == 'credit') {
      this.transactions = this.transactions?.filter(t => {
        return t.transType.includes("Credited");
      })
    }

  }

}


class Transaction {
  img !: number;
  desc!: string;
  date!: string;
  amount!: number;
  transType!: string;
  classType!: string;
  sign!: string;

}

