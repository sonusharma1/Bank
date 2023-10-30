import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../customer';
import { Observable } from 'rxjs';


const REGISTER_API = 'http://localhost:8086/api/';

const getlink = 'http://localhost:8086/api/getAccountDetailByCustomerAccountNumber';
const checkbal = 'http://localhost:8086/api/checkBalance';
//const deposit='http://localhost:8086/api/deposit';
//const withdraw='http://localhost:8086/api/withdraw';
const AUTH_API = 'http://localhost:8086/user/';
const updateCust = 'http://localhost:8086/api/updateAccount';
const deleteCust = 'http://localhost:8086/api/admin/deleteCustomer';
const getAdhar = 'http://localhost:8086/api/customerByAdharNo';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(REGISTER_API + 'getAllAccountDetails', httpOptions);
  }

  register(customer: Customer): Observable<Object> {
    return this.http.post<any>(REGISTER_API + 'createAccount', customer,
      httpOptions);
  }

  getCustomerById(accountNumber: number): Observable<Customer> {
    return this.http.get<Customer>(`${getlink}/${accountNumber}`);
  }

  getBalance(accountNumber: number): Observable<Customer> {
    return this.http.get<Customer>(`${checkbal}/${accountNumber}`);
  }

  login(credentials: { username: any; password: any; }): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      userName: credentials.username,
      password: credentials.password,
    }, httpOptions);
  }
  
  deposit(accountNumber: number, description: string, amount: number): Observable<any> {
    console.log(accountNumber);
    console.log(description);
    console.log(amount);
    return this.http.post<any>(REGISTER_API + 'deposit/' + accountNumber + '/' + description + '/' + amount, httpOptions);
  }

  withdraw(accountNumber: number, description: string, amount: number): Observable<any> {
    console.log(accountNumber);
    console.log(description);
    console.log(amount);
    return this.http.post<any>(REGISTER_API + 'withdraw/' + accountNumber + '/' + description + '/' + amount, httpOptions);
  }

  fundtransfer(senderAccountNumber: number, receiverAccountNumber: number, amount: number, description: string): Observable<any> {
    console.log(senderAccountNumber);
    console.log(receiverAccountNumber);
    console.log(description);
    console.log(amount);
    return this.http.post<any>(REGISTER_API + 'fundTransfer/' + senderAccountNumber + '/' + receiverAccountNumber + '/' + amount + '/' + description, httpOptions);
  }

  update(accountNumber: number, customer: Customer): Observable<Object> {
    return this.http.put(`${updateCust}/${accountNumber}`, customer);
  }

  deleteCustomer(accountNumber: number): Observable<Object> {
    console.log(accountNumber);
    return this.http.delete(`${deleteCust}/${accountNumber}`);
  }

  getTransactionHistory(accNumber: number): Observable<any> {
    return this.http.get<any>(REGISTER_API + '/transactionHistory' + '/' + accNumber, httpOptions);
  }

  getCustAdhar(customerAdharNo: string): Observable<Customer> {

    return this.http.get<Customer>(`${getAdhar}/${customerAdharNo}`);
  }
}
