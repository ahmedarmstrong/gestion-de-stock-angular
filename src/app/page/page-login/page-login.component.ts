import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginModel } from 'src/services/model/login-model';
import { AuthService } from 'src/services/service/auth.service';



@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss'],
})
export class PageLoginComponent implements OnInit {

 

  constructor(
   private authService : AuthService,
   private router : Router
  ){}

  loginForm: LoginModel = {
    email: '',
    password: '',
  };

 
  ngOnInit(): void {

   
  }

  userLogin() {
    this.authService.userLogin(this.loginForm).subscribe((data) => {
      this.authService.setConnectedUser;
      if (data) {
        this.router.navigate(['/']);
      }
    });

    
  }


 
}
