import { Component, EventEmitter,  OnInit, Output, Input} from '@angular/core';
import { Router } from '@angular/router';
import { FournisseurDto } from 'src/services/model/fournisseur-dto';
import { FournisseurService } from 'src/services/service/fournisseur.service';

@Component({
  selector: 'app-detail-frs',
  templateUrl: './detail-frs.component.html',
  styleUrls: ['./detail-frs.component.scss']
})
export class DetailFrsComponent implements OnInit {

  @Input()
  fournisseurDto: FournisseurDto = {};

  @Output()
  suppressionResult = new EventEmitter();

  constructor(
    private router: Router,
    private fournisseurservice : FournisseurService,
  ) { }

  ngOnInit(): void {
  }

  modifierclient(): void {
    this.router.navigate(['nouveaufournisseur', this.fournisseurDto.id]);
  }

  confirmerEtSupprimerArticle(): void {
    if (this.fournisseurDto.id) {
      this.fournisseurservice.delete(this.fournisseurDto.id)
      .subscribe(res => {
        this.suppressionResult.emit('success');
      }, error => {
        this.suppressionResult.emit(error.error.error);
      });
  }
  }

}
