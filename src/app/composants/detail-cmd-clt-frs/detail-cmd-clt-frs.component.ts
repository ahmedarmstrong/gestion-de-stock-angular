import { Component, EventEmitter,  OnInit, Output, Input} from '@angular/core';
import { Router } from '@angular/router';
import { ClientDto } from 'src/services/model/clientDto';
import { CommandeClientDto } from 'src/services/model/commande-client-dto';
import { CommandeClientService } from 'src/services/service/commandeClient.service';

@Component({
  selector: 'app-detail-cmd-clt-frs',
  templateUrl: './detail-cmd-clt-frs.component.html',
  styleUrls: ['./detail-cmd-clt-frs.component.scss']
})
export class DetailCmdCltFrsComponent implements OnInit{


  @Input()
  CommandeClientDto: CommandeClientDto = {};
  @Input()
  commande: any = {};

  constructor(
    private router: Router,
    private commandeClientService : CommandeClientService,
  ) { }

  ngOnInit(): void {
 
  }


}
