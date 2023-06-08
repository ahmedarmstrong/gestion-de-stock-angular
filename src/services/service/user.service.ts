import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserProfile } from 'src/services/model/user-dto';
import { of, map } from 'rxjs';




@Injectable({
    providedIn: 'root',
  })

  export class UserService {
    baseurl = 'http://localhost:8080/gestiondestock/v1/utilisateurs/';
    user: UserProfile[] = [];
  
    constructor(private Http: HttpClient) {}
  
    findall() {
      return this.Http.get<UserProfile[]>(this.baseurl + 'all');
    }
  
    save (model:any) {
      return this.Http.post<UserProfile>(this.baseurl + 'create', model)
    }
  
    delete (idUser: number) {
      return this.Http.delete(this.baseurl + 'delete/'+ idUser)
    }
  
    findByEmail(email: string) {
      return this.Http.get(this.baseurl + 'find/'+ email)
    }
  
    findById(idUser: number){
      return this.Http.get(this.baseurl + idUser)
    }

  }
  