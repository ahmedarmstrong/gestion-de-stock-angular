import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FournisseurDto } from '../model/fournisseur-dto';

@Injectable({
  providedIn: 'root',
})
export class FournisseurService {
  baseurl = 'http://localhost:8080/gestiondestock/v1/fournisseurs/';
  fournisseur: FournisseurDto[] = [];

  constructor(private Http: HttpClient) {}

  findall() {
    return this.Http.get<FournisseurDto[]>(this.baseurl + 'all');
  }

  save(model: any) {
    return this.Http.post<FournisseurDto>(this.baseurl + 'create', model);
  }

  delete(idFournisseur: number) {
    return this.Http.delete(this.baseurl + 'delete/' + idFournisseur);
  }

  findById(idFournisseur: number) {
    return this.Http.get(this.baseurl + idFournisseur);
  }
}
