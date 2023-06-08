import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleDto } from 'src/services/model/article';
import { CommandeClientDto } from 'src/services/model/commande-client-dto';
import { LigneCommandeClientDto } from 'src/services/model/ligne-commande-client-dto';
import { ArticleService } from 'src/services/service/article.service';
import { ClientService } from 'src/services/service/client.service';
import { CommandeClientService } from 'src/services/service/commandeClient.service';

@Component({
  selector: 'app-nouvelle-cmd-clt-frs',
  templateUrl: './nouvelle-cmd-clt-frs.component.html',
  styleUrls: ['./nouvelle-cmd-clt-frs.component.scss']
})
export class NouvelleCmdCltFrsComponent implements OnInit{

 
  selectedClient: any = {};
  listClients: Array<any> = [];
  searchedArticle: ArticleDto = {};
  listArticle: Array<ArticleDto> = [];
  codeArticle = '';
  quantite = '';
  codeCommande = '';

  lignesCommande: Array<any> = [];
  totalCommande = 0;
  articleNotYetSelected = false;
  errorMsg: Array<string> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cltService: ClientService,
    private articleService: ArticleService,
    private cmdCltService: CommandeClientService
  ) { }

  ngOnInit(): void {
    this.findAllClientsFournisseurs();
    this.findAllArticles();
  }

  findAllClientsFournisseurs(): void {
    
      this.cltService.findall()
      .subscribe(clients => {
        this.listClients = clients;
      });
   
  }

  findAllArticles(): void {
    this.articleService.findall()
    .subscribe(articles => {
      this.listArticle = articles;
    });
  }

  filtrerArticle(): void {
    if (this.codeArticle.length === 0) {
      this.findAllArticles();
    }
    this.listArticle = this.listArticle
    .filter(art => art.codeArticle?.includes(this.codeArticle) || art.designation?.includes(this.codeArticle));
  }

  ajouterLigneCommande(): void {
    this.checkLigneCommande();
    this.calculerTotalCommande();

    this.searchedArticle = {};
    this.quantite = '';
    this.codeArticle = '';
    this.articleNotYetSelected = false;
    this.findAllArticles();
  }

  calculerTotalCommande(): void {
    this.totalCommande = 0;
    this.lignesCommande.forEach(ligne => {
      if (ligne.prixUnitaire && ligne.quantite) {
        this.totalCommande += +ligne.prixUnitaire * +ligne.quantite;
      }
    });
  }

  private checkLigneCommande(): void {
    const ligneCmdAlreadyExists = this.lignesCommande.find(lig => lig.article?.codeArticle === this.searchedArticle.codeArticle);
    if (ligneCmdAlreadyExists) {
      this.lignesCommande.forEach(lig => {
        if (lig && lig.article?.codeArticle === this.searchedArticle.codeArticle) {
          // @ts-ignore
          lig.quantite = lig.quantite + +this.quantite;
        }
      });
    } else {
      const ligneCmd: LigneCommandeClientDto = {
        article: this.searchedArticle,
        prixUnitaire: this.searchedArticle.prixUnitaireTtc,
        quantite: +this.quantite
      };
      this.lignesCommande.push(ligneCmd);
    }
  }

  selectArticleClick(article: ArticleDto): void {
    this.searchedArticle = article;
    this.codeArticle = article.codeArticle ? article.codeArticle : '';
    this.articleNotYetSelected = true;
  }

  enregistrerCommande(): void {
    const commande = this.preparerCommande();
    
      this.cmdCltService.save(commande as CommandeClientDto)
      .subscribe(cmd => {
        this.router.navigate(['commandesclient']);
      }, error => {
        this.errorMsg = error.error.errors;
      });
    
  }

  private preparerCommande(): any {
    
      return  {
        client: this.selectedClient,
        code: this.codeCommande,
        dateCommande: new Date().getTime(),
        etatCommande: 'EN_PREPARATION',
        ligneCommandeClients: this.lignesCommande
      };
  
  }

}
