import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeClientDto } from 'src/services/model/commande-client-dto';
import { LigneCommandeClientDto } from 'src/services/model/ligne-commande-client-dto';
import { CommandeClientService } from 'src/services/service/commandeClient.service';

@Component({
  selector: 'app-page-cmd-clt-frs',
  templateUrl: './page-cmd-clt-frs.component.html',
  styleUrls: ['./page-cmd-clt-frs.component.scss']
})
export class PageCmdCltFrsComponent implements OnInit{
  listeCommandes: Array<CommandeClientDto> = [];
  mapLignesCommande = new Map();
  mapPrixTotalCommande = new Map();

  lignesCommande: Array<any> = [];
  totalCommande = 0;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private commandeClientService: CommandeClientService
  ) { }

  ngOnInit(): void {
    this.findAllCommandes();
  }


  findAllCommandes(): void {

      this.commandeClientService.findall()
      .subscribe(cmd => {
        this.listeCommandes = cmd;
        this.findAllLignesCommande();
      });
   
  }

  findAllLignesCommande(): void {
    this.listeCommandes.forEach(cmd => {
     this.findLignesCommande(cmd.id);
    });
  }

  nouvelleCommande(): void {
      this.router.navigate(['nouvellecommandeclt']);
  }

  findLignesCommande(idCommande?: number): void {
   
      this.commandeClientService.findAllLignesCommandesClientByCommandeClientId(idCommande!)
      .subscribe(list => {
        this.mapLignesCommande.set(idCommande, list);
        this.mapPrixTotalCommande.set(idCommande, this.calculerTatalCmd(list as Array<LigneCommandeClientDto>));      });
    
  }

  calculerTatalCmd(list: Array<LigneCommandeClientDto>): number {
    let total = 0;
    list.forEach(ligne => {
      if (ligne.prixUnitaire && ligne.quantite) {
        total += +ligne.quantite * +ligne.prixUnitaire;
      }
    });
    return Math.floor(total);
  }

  calculerTotalCommande(id?: number): number {
    return this.mapPrixTotalCommande.get(id);
  }

}
