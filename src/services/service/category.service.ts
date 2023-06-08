import { Injectable } from '@angular/core';
import { CategoryDto } from '../model/categoryDto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  baseurl = 'http://localhost:8080/gestiondestock/v1/categories/';
  category: CategoryDto[] = [];

  constructor(private Http: HttpClient) {}

  findall() {
    return this.Http.get<CategoryDto[]>(this.baseurl + 'all');
  }

  save (model:any) {
    return this.Http.post<CategoryDto>(this.baseurl + 'create', model)
  }

  delete (idCategory: number) {
    return this.Http.delete(this.baseurl + 'delete/'+ idCategory)
  }

  findByCode(codeCategory: string) {
    return this.Http.get(this.baseurl + 'filter/'+ codeCategory)
  }

  findById(idCategory: number){
    return this.Http.get(this.baseurl + idCategory)
  }
}
