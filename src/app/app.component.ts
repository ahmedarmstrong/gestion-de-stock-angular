import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/services/model/user-dto';
import { AuthService } from 'src/services/service/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'front-angular';

  userProfile?: UserProfile | null;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.userProfile.subscribe((data) => {
      this.userProfile = data;
    });
  }
 
}
