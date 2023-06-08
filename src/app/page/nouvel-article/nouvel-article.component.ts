import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ArticleDto } from 'src/services/model/article';
import { CategoryDto } from 'src/services/model/categoryDto';
import { ArticleService } from 'src/services/service/article.service';
import { CategoriesService } from 'src/services/service/category.service';






@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.scss']
})
export class NouvelArticleComponent implements OnInit {
  articleDto: ArticleDto = {};
  categorieDto: CategoryDto = {};
  listeCategorie: Array<CategoryDto> = [];
  errorMsg: Array<string> = [];
 

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
    private categoryService: CategoriesService,
  ) { }

  ngOnInit(): void {
    this.categoryService.findall()
    .subscribe(categories => {
      this.listeCategorie = categories;
    });

    const idArticle = this.activatedRoute.snapshot.params['idArticle'];
    if (idArticle) {
      this.articleService.findById(idArticle)
      .subscribe(article => {
        this.articleDto = article;
        this.categorieDto = this.articleDto.category ? this.articleDto.category : {};
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/articles']);
  }

  enregistrerArticle(): void {
    this.articleDto.category = this.categorieDto;
    this.articleService.save(this.articleDto)
    .subscribe(art => {
      //this.savePhoto(art.id, art.codeArticle);
    }, error => {
      this.errorMsg = error.error.errors;
    });
  }

  calculerTTC(): void {
    if (this.articleDto.prixUnitaireHt && this.articleDto.tauxTva) {
      // prixHT + (prixHT * (tauxTVA / 100))
      this.articleDto.prixUnitaireTtc =
        +this.articleDto.prixUnitaireHt + (+(this.articleDto.prixUnitaireHt * (this.articleDto.tauxTva / 100)));
    }
  }

 
  


}
