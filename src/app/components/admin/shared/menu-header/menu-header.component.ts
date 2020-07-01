import { Component, OnInit } from '@angular/core';

// Url globales
import { global } from '../services/global';

// Servicios
import { UserService } from '../services/user.service';



// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {

  public url: string;
  public identity: any;
  constructor(private userServices: UserService) {
    this.url = global.url;
    this.identity = this.userServices.getIdentity();
  }


  ngOnInit(): void {
  }

}
