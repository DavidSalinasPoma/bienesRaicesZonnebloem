import { Component, OnInit } from '@angular/core';
// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bienesRaices';

  ngOnInit(): void {
    window.onload = () => {
      // alert('Cargado la pagina');
      $('#onload').fadeOut();
      $('body').removeClass('hidden');
      $('#navegacion').removeClass('d-none');
    };
  }
}


