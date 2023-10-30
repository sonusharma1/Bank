import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedIn!:false;
  
  constructor(private router: Router,private tokenStorage: TokenStorageService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      console.log(this.tokenStorage.getToken());
    
  }

   
  }

  goToRegisterAccount() {
      this.router.navigate(['/createaccount']);
  }

}