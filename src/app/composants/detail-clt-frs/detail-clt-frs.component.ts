import { Component, EventEmitter,  OnInit, Output, Input} from '@angular/core';
import { Router } from '@angular/router';
import { ClientDto } from 'src/services/model/clientDto';
import { ClientService } from 'src/services/service/client.service';
import { FournisseurService } from 'src/services/service/fournisseur.service';

@Component({
  selector: 'app-detail-clt-frs',
  templateUrl: './detail-clt-frs.component.html',
  styleUrls: ['./detail-clt-frs.component.scss']
})
export class DetailCltFrsComponent implements OnInit {
  @Input()
  clientdto: ClientDto = {};

  @Output()
  suppressionResult = new EventEmitter();

  constructor(
    private router: Router,
    private clientservice : ClientService,
  ) { }

  ngOnInit(): void {
  }

  modifierclient(): void {
    this.router.navigate(['nouveauclient', this.clientdto.id]);
  }

  confirmerEtSupprimerArticle(): void {
    if (this.clientdto.id) {
      this.clientservice.delete(this.clientdto.id)
      .subscribe(res => {
        this.suppressionResult.emit('success');
      }, error => {
        this.suppressionResult.emit(error.error.error);
      });
  }
  }

  
  
}
