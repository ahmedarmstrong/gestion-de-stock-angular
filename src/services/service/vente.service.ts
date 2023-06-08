import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VentesDto } from '../model/vente-dto';

@Injectable({
  providedIn: 'root',
})
export class VentesService {
  baseurl = 'http://localhost:8080/gestiondestock/v1/ventes/';
  vente: VentesDto[] = [];

  constructor(private Http: HttpClient) {}

  findall() {
    return this.Http.get<VentesDto[]>(this.baseurl + 'all');
  }

  save (model:any) {
    return this.Http.post<VentesDto>(this.baseurl + 'create', model)
  }

  delete (idVente: number) {
    return this.Http.delete(this.baseurl + 'delete/'+ idVente)
  }

  findByCode(codeVente: string) {
    return this.Http.get(this.baseurl + codeVente)
  }

  findById(idVente: number){
    return this.Http.get(this.baseurl + idVente)
  }

}