import { Injectable } from '@angular/core';
import { ClientDto } from '../model/clientDto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  baseurl = 'http://localhost:8080/gestiondestock/v1/clients/';
  client: ClientDto[] = [];

  constructor(private Http: HttpClient) {}

  findall() {
    return this.Http.get<ClientDto[]>(this.baseurl + 'all');
  }

  save(model: any) {
    return this.Http.post<ClientDto>(this.baseurl + 'create', model);
  }

  delete(idClient: number) {
    return this.Http.delete(this.baseurl + 'delete/' + idClient);
  }

  findById(idClient: number) {
    return this.Http.get(this.baseurl + idClient);
  }
}
