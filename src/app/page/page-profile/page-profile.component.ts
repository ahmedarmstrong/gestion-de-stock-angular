import { Component } from '@angular/core';
import { UserProfile } from 'src/services/model/user-dto';
import { AuthService } from 'src/services/service/auth.service';

@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.scss'],
})
export class PageProfileComponent {
  connectedUser: UserProfile = {};

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.connectedUser = this.auth.getConnectedUser();
  }
  data = JSON.parse(localStorage.getItem('token')!!);
}
