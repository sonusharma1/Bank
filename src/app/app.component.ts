import { Component } from '@angular/core';
import { TokenStorageService } from './service/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //private roles!: string[];
  isLoggedIn = false;
  //showInstructor=false;
  showCustomer=false;
  //showInsList=false;
  showList=true;
  showBalance=false;
  //showAssign=false;
  //showInstToCourse=false;
  //username!: string ;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.showCustomer=true;
      this.showList=true;
      this.showBalance=true;

    }

  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
