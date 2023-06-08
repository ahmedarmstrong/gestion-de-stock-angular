import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ClientDto } from 'src/services/model/clientDto';
import { ClientService } from 'src/services/service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit{

  listClient: Array<ClientDto> = [];
  errorMsg = '';

  constructor(
    private router: Router,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.findAllClients();
  }


  findAllClients(): void {
    this.clientService.findall()
    .subscribe(clients => {
      this.listClient = clients;
    });
  }

  nouveauClient(): void {
    this.router.navigate(['nouveauclient']);
  }

  handleSuppression(event: any): void {
    if (event === 'success') {
      this.findAllClients();
    } else {
      this.errorMsg = event;
    }
  }
}
