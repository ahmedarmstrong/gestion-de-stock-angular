import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, ReplaySubject, catchError, map, of } from 'rxjs';
import { UserProfile } from '../model/user-dto';
import { LoginModel } from '../model/login-model';
import { TokenModel } from '../model/token-model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSource = new ReplaySubject<UserProfile | null>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private httpClient: HttpClient, private router: Router) {}
  userProfile = new BehaviorSubject<UserProfile | null>(null);
  jwtService: JwtHelperService = new JwtHelperService();

  userLogin(payload: LoginModel) {
    return this.httpClient
      .post('http://localhost:8080/api/v1/auth/authenticate', payload)
      .pipe(
        map((data) => {
          var token = data as TokenModel;
          var user = data as UserProfile;
          localStorage.setItem('token', JSON.stringify(token));
          localStorage.setItem('connecteduser', JSON.stringify(user))

          var userInfo = this.jwtService.decodeToken(
            token.token!!
          ) as UserProfile;

          this.userProfile.next(userInfo);

          return true;
        }),
        catchError((error) => {
          console.log(error);
          return of(false);
        })
      );
  }

  getAccessToken(): string {
    var localStorageToken = localStorage.getItem('token');
    if (localStorageToken) {
      var token = JSON.parse(localStorageToken) as TokenModel;
      var isTokenExpired = this.jwtService.isTokenExpired(token.token!!);
      if (isTokenExpired) {
        this.userProfile.next(null);
        return '';
      }
      var userInfo = this.jwtService.decodeToken(token.token!!) as UserProfile;
      this.userProfile.next(userInfo);
      return token.token!!;
    }
    return '';
  }
  isloggedIn() {
    return !!localStorage.getItem('token');
  }
  setConnectedUser(user: UserProfile): void {
    localStorage.setItem('connectedUser', JSON.stringify(user));
  }
  getConnectedUser(): UserProfile {
    if (localStorage.getItem('token')) {
      return JSON.parse(localStorage.getItem('token') as string);
    }
    return {};
  }
  logOut() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('login');
  }

  redirectUser(roles: String[]) {
    switch (roles[0]) {
      case 'ADMIN':
        this.router.navigateByUrl('/admin-dashboard');
        break;
      case 'USER':
        this.router.navigateByUrl('/');
        break;
      default:
        this.router.navigateByUrl('/login');
    }
  }
}
