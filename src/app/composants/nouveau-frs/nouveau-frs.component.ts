import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FournisseurDto } from 'src/services/model/fournisseur-dto';
import { FournisseurService } from 'src/services/service/fournisseur.service';

@Component({
  selector: 'app-nouveau-frs',
  templateUrl: './nouveau-frs.component.html',
  styleUrls: ['./nouveau-frs.component.scss']
})
export class NouveauFrsComponent implements OnInit{

  fournisseurDto: FournisseurDto = {};
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fournisseurservice: FournisseurService,
  ) { }

  ngOnInit(): void {
    this.fournisseurservice.findall()
   
    const idFournisseur = this.activatedRoute.snapshot.params['idFournisseur'];
    if (idFournisseur) {
      this.fournisseurservice.findById(idFournisseur)
      .subscribe(fournisseur => {
        this.fournisseurDto = fournisseur;
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/fournisseurs']);
  }

  enregistrer(): void {
    this.fournisseurservice.save(this.fournisseurDto)
    .subscribe(art => {
      //this.savePhoto(art.id, art.codeArticle);
    }, error => {
      this.errorMsg = error.error.errors;
    });
  }

}
