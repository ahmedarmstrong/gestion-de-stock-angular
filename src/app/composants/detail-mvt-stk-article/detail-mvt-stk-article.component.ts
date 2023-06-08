import { Component, EventEmitter,  OnInit, Output, Input} from '@angular/core';
import { Router } from '@angular/router';
import { ArticleDto } from 'src/services/model/article';

@Component({
  selector: 'app-detail-mvt-stk-article',
  templateUrl: './detail-mvt-stk-article.component.html',
  styleUrls: ['./detail-mvt-stk-article.component.scss']
})
export class DetailMvtStkArticleComponent {


  @Input()
  
  articleDto: ArticleDto = {};
  

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
 
  }
}
