import { Component, OnInit } from '@angular/core';

// Url globales
import { global } from '../services/global';

// Servicios
import { UserService } from '../services/user.service';



// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.css']
})
export class MenuSidebarComponent implements OnInit {
  public url: string;
  public identity: any;
  constructor(private userServices: UserService) {
    this.url = global.url;
    this.identity = this.userServices.getIdentity();
  }

  ngOnInit(): void {
  }

}
