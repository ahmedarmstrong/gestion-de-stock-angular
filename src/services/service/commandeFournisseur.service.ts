import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CommandeFournisseurDto } from '../model/commande-four-dto';

@Injectable({
  providedIn: 'root',
})
export class CommandeFournisseurService {
  baseurl = 'http://localhost:8080/gestiondestock/v1/commandesfournisseurs/';
  CommandeFournisseur: CommandeFournisseurDto[] = [];

  constructor(private Http: HttpClient) {}


  findall() {
    return this.Http.get<CommandeFournisseurDto[]>(this.baseurl + 'all');
  }

  save(model: any) {
    return this.Http.post<CommandeFournisseurDto>(this.baseurl + 'create', model);
  }

  deleteArticle (idCommande : number , idLigneCommande : number) {
    return this.Http.delete(this.baseurl + 'delete/article/' + idCommande+ '/' + idLigneCommande)
  }

  delete ( idCommandeFournisseur : number) {
    return this.Http.delete(this.baseurl + 'delete/' + idCommandeFournisseur);
  }

  findByCode (codeCommandeFournisseur : number) {
    return this.Http.get(this.baseurl + 'filter/'+ codeCommandeFournisseur)
  }

  findAllLignesCommandesFournisseurByCommandeFournisseurId (idCommande : number) {
    return this.Http.get(this.baseurl + 'lignesCommande/'+ idCommande)
  }

  updateArticle (idCommande :number,idLigneCommande :number, idArticle :number, model: any ){
    return this.Http.patch(this.baseurl + 'update/article/' + idCommande + '/' + idLigneCommande + '/' + idArticle, model)
  }

  updateClient(idCommande :number,idFournisseur :number, model: any){
    return this.Http.patch(this.baseurl + 'update/client/' + idCommande + '/' + idFournisseur, model)
  }

  updateEtatCommande (idCommande :number,etatCommande :string, model: any){
    return this.Http.patch(this.baseurl + 'update/etat/' + idCommande + '/' + etatCommande, model)
  }

  updateQuantiteCommande (idCommande :number,idLigneCommande :number, quantite :number, model: any ){
    return this.Http.patch(this.baseurl + 'update/quantite/' + idCommande + '/' + idLigneCommande + '/' + quantite, model)
  }

  findById (idCommandeFournisseur : number) {
    return this.Http.get(this.baseurl + idCommandeFournisseur);
  }

}
