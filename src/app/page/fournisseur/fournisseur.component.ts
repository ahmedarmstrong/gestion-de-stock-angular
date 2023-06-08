import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FournisseurDto } from 'src/services/model/fournisseur-dto';
import { FournisseurService } from 'src/services/service/fournisseur.service';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.scss']
})
export class FournisseurComponent  implements OnInit {

  listFournisseur: Array<FournisseurDto> = [];
  errorMsg = '';

  constructor(
    private router: Router,
    private fournisseurService: FournisseurService
  ) { }

  ngOnInit(): void {
    this.findAllFournisseurs();
  }


  findAllFournisseurs(): void {
    this.fournisseurService.findall()
    .subscribe(fournisseurs => {
      this.listFournisseur = fournisseurs;
    });
  }

  nouveauFournisseur(): void {
    this.router.navigate(['nouveaufournisseur']);
  }

  handleSuppression(event: any): void {
    if (event === 'success') {
      this.findAllFournisseurs();
    } else {
      this.errorMsg = event;
    }
  }

}
