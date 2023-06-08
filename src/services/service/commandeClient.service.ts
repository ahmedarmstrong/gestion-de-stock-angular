import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CommandeClientDto } from '../model/commande-client-dto';

@Injectable({
  providedIn: 'root',
})
export class CommandeClientService {
  baseurl = 'http://localhost:8080/gestiondestock/v1/commandesclients/';
  CommandeClient: CommandeClientDto[] = [];

  constructor(private Http: HttpClient) {}


  findall() {
    return this.Http.get<CommandeClientDto[]>(this.baseurl + 'all');
  }

  save(model: any) {
    return this.Http.post<CommandeClientDto>(this.baseurl + 'create', model);
  }

  deleteArticle (idCommande : number , idLigneCommande : number) {
    return this.Http.delete(this.baseurl + 'delete/article/' + idCommande+ '/' + idLigneCommande)
  }

  delete ( idCommandeClient : number) {
    return this.Http.delete(this.baseurl + 'delete/' + idCommandeClient);
  }

  findByCode (codeCommandeClient : number) {
    return this.Http.get(this.baseurl + 'filter/'+ codeCommandeClient)
  }

  findAllLignesCommandesClientByCommandeClientId (idCommande : number) {
    return this.Http.get(this.baseurl + 'lignesCommande/'+ idCommande)
  }

  updateArticle (idCommande :number,idLigneCommande :number, idArticle :number, model: any ){
    return this.Http.patch(this.baseurl + 'update/article/' + idCommande + '/' + idLigneCommande + '/' + idArticle, model)
  }

  updateClient(idCommande :number,idClient :number, model: any){
    return this.Http.patch(this.baseurl + 'update/client/' + idCommande + '/' + idClient, model)
  }

  updateEtatCommande (idCommande :number,etatCommande :string, model: any){
    return this.Http.patch(this.baseurl + 'update/etat/' + idCommande + '/' + etatCommande, model)
  }

  updateQuantiteCommande (idCommande :number,idLigneCommande :number, quantite :number, model: any ){
    return this.Http.patch(this.baseurl + 'update/quantite/' + idCommande + '/' + idLigneCommande + '/' + quantite, model)
  }

  findById (idCommandeClient : number) {
    return this.Http.get(this.baseurl + idCommandeClient);
  }

}
