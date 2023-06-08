import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MvtStkDto } from '../model/mvt-stk-dto';

@Injectable({
  providedIn: 'root',
})
export class MvtStkService {
  baseurl = 'http://localhost:8080/gestiondestock/v1/mvtstk/';
  mvtstk: MvtStkDto[] = [];

  constructor(private Http: HttpClient) {}

  correctionStockNeg (model:any) {

    return this.Http.post<MvtStkDto>(this.baseurl + 'correctionneg', model)
  }

  correctionStockPos (model:any) {

    return this.Http.post<MvtStkDto>(this.baseurl + 'correctionpos', model)

  }

  entreeStock (model:any) {
    return this.Http.post<MvtStkDto>(this.baseurl + 'entree', model)

  }

  findall (idArticle : number){
    return this.Http.get(this.baseurl + 'filter/article/'+ idArticle)
  }

  sortieStock (model:any) {
    return this.Http.post<MvtStkDto>(this.baseurl + 'sortie', model)

  }

  stockReelArticle (idArticle : number) {
    return this.Http.get(this.baseurl + 'stockreel/'+ idArticle)

  }

}