import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleDto } from 'src/services/model/article';
import { MvtStkDto } from 'src/services/model/mvt-stk-dto';
import { ArticleService } from 'src/services/service/article.service';
import { MvtStkService } from 'src/services/service/mvtStk.service';

@Component({
  selector: 'app-mvtstk',
  templateUrl: './mvtstk.component.html',
  styleUrls: ['./mvtstk.component.scss']
})
export class MvtstkComponent implements OnInit{

  listArticle: Array<ArticleDto> = [];
  listeMvt : MvtStkDto = {};
  mapLignesCommande = new Map();
  errorMsg = '';

  constructor(
    private router: Router,
    private articleService: ArticleService,
    private mvtStkService : MvtStkService
  ) { }


  ngOnInit(): void {
    this.findListArticle();
  }

  findListArticle(): void {
    this.articleService.findall()
    .subscribe(articles => {
      this.listArticle = articles;
    });
  }

  

  findall (idArticle : number) : void {
    this.mvtStkService.findall(idArticle)
    .subscribe(mvt => {
     this.listeMvt = mvt ;
    });
  }


}
