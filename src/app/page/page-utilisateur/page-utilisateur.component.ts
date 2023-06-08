import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile } from 'src/services/model/user-dto';
import { UserService } from 'src/services/service/user.service';

@Component({
  selector: 'app-page-utilisateur',
  templateUrl: './page-utilisateur.component.html',
  styleUrls: ['./page-utilisateur.component.scss']
})
export class PageUtilisateurComponent implements OnInit{


  listUser: Array<UserProfile> = [];
  errorMsg = '';

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.findAllUsers();
  }


  findAllUsers(): void {
    this.userService.findall()
    .subscribe(user => {
      this.listUser = user;
    });
  }

  handleSuppression(event: any): void {
    if (event === 'success') {
      this.findAllUsers();
    } else {
      this.errorMsg = event;
    }
  }

}
