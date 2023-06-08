import { Component, EventEmitter,  OnInit, Output, Input} from '@angular/core';
import { Router } from '@angular/router';
import { MvtStkDto } from 'src/services/model/mvt-stk-dto';

@Component({
  selector: 'app-detail-mvt-stk',
  templateUrl: './detail-mvt-stk.component.html',
  styleUrls: ['./detail-mvt-stk.component.scss']
})
export class DetailMvtStkComponent  implements OnInit{
  @Input()
  mvtStk: MvtStkDto = {};
  

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
 
  }

  

}
