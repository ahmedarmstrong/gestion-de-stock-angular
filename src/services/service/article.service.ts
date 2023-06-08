import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { ArticleDto } from "../model/article";



@Injectable({
    providedIn: 'root',
})

 export class ArticleService {

    baseurl = 'http://localhost:8080/gestiondestock/v1/articles/';
  category: ArticleDto[] = [];

  constructor(private Http: HttpClient) {}


  findall() {
    return this.Http.get<ArticleDto[]>(this.baseurl + 'all');
  }

  save (model:any) {
    return this.Http.post<ArticleDto>(this.baseurl + 'create', model)
  }

  delete (idArticle: number) {
    return this.Http.delete(this.baseurl + 'delete/'+ idArticle)
  }

  findAllArticleByIdCategory (idCategory : number ) {
    return this.Http.get(this.baseurl + 'filter/category/'+ idCategory)
  }

  findByCode(codeArticle: string) {
    return this.Http.get(this.baseurl + 'filter/'+ codeArticle)
  }

  findHistoriaueCommandeClient (idArticle : number ){
    return this.Http.get(this.baseurl + 'historique/commandeclient/'+ idArticle)
  }

  findHistoriqueCommandeFournisseur (idArticle : number ) {
    return this.Http.get(this.baseurl + 'historique/commandefournisseur/'+ idArticle)
  }

  findHistoriqueVentes (idArticle : number) {
    return this.Http.get(this.baseurl + 'historique/vente/'+ idArticle)
  }

  findById(idArticle : number){
    return this.Http.get(this.baseurl + idArticle)
  }
}