import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/services/model/user-dto';
import { AuthService } from 'src/services/service/auth.service';
import { UserService } from 'src/services/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  connectedUser: UserProfile = {};

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.connectedUser = this.auth.getConnectedUser();
  }

  data = JSON.parse(localStorage.getItem('token')!!);
  logout() {
    this.auth.logOut();
  }
}
