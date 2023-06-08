import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientDto } from 'src/services/model/clientDto';
import { ClientService } from 'src/services/service/client.service';

@Component({
  selector: 'app-nouveau-clt-frs',
  templateUrl: './nouveau-clt-frs.component.html',
  styleUrls: ['./nouveau-clt-frs.component.scss']
})
export class NouveauCltFrsComponent implements OnInit{

  clientDto: ClientDto = {};
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private clientService: ClientService,
  ) { }

  ngOnInit(): void {
    this.clientService.findall()
   
    const idClient = this.activatedRoute.snapshot.params['idClient'];
    if (idClient) {
      this.clientService.findById(idClient)
      .subscribe(client => {
        this.clientDto = client;
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/clients']);
  }

  enregistrer(): void {
    this.clientService.save(this.clientDto)
    .subscribe(art => {
      //this.savePhoto(art.id, art.codeArticle);
    }, error => {
      this.errorMsg = error.error.errors;
    });
  }

}
