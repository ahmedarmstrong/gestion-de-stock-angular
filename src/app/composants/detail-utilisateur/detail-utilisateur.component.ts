import { Component,OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile } from 'src/services/model/user-dto';
import { UserService } from 'src/services/service/user.service';

@Component({
  selector: 'app-detail-utilisateur',
  templateUrl: './detail-utilisateur.component.html',
  styleUrls: ['./detail-utilisateur.component.scss']
})
export class DetailUtilisateurComponent  implements OnInit{
  @Input()
  userDto: UserProfile = {};

  @Output()
  suppressionResult = new EventEmitter();

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
  }

  
}
