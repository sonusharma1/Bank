import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  successClass!:string;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  message!: String;
  jwt: string = '';
  userName: string = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,
    private router: Router) { }


  ngOnInit() {
    if (this.tokenStorage.getToken()) {

      this.router.navigate(['./home']);

      // this.isLoggedIn = true;
      // //this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit() {
     
    this.authService.login(this.form).subscribe(
      data => {
        console.log("Success");
      },
      err => {
        if (err.status == 500) {
         this.OnError();
          //alert("Invalid");
          return;
        }
        let jwt=err.error.text;
        this.tokenStorage.saveToken(jwt);
        this.reloadPage();
      },
      () => { console.log("done") }
      );
     
  //   this.authService.login(this.form).subscribe(
  //     data => {
        
  //       console.log("success");

  //        this.tokenStorage.saveToken(data.accessToken);


  //       //this.tokenStorage.saveUser(data);
  //       // alert(this.tokenStorage.getToken());

  //       this.isLoginFailed = false;
  //       this.isLoggedIn = true;
  //       //this.roles = this.tokenStorage.getUser().roles;
  //       //this.goToHome();
  //       //this.reloadPage();
       
  //       this.message = "LogIn successful";

  //     },
  //     err => {
        
  //       console.log("error");
  //       // this.errorMessage = err.error.message;
  //       // this.isLoginFailed = true;
  //       console.log(err);

  //       if (err.error.message === 'UserName is required') {
  //         this.message = err.error.message;
  //         this.isLoginFailed = true;
  //         this.isLoggedIn = false;
  //       } else {
  //         this.isLoggedIn = true; //login successful
  //         this.isLoginFailed = false;

  //         this.jwt = err.error.text; //storing token in jwt variable
  //         this.tokenStorage.saveToken(this.jwt);
  //         console.log('Here is the JWT:', this.jwt); //printing token in the console
  //         //this.goToHome();
  //         this.reloadPage();
  //       }
  //     }
  //   );
 
  //  this.router.navigate(['./home']);
    
      
    
  }

  reloadPage() {
    window.location.reload();
  }

  goToHome() {
    this.router.navigate(['']);
  }

  OnError(){
  this.successClass='success_msg';

  window.setTimeout(()=>{
    window.location.reload();
  },2000);
}
}


