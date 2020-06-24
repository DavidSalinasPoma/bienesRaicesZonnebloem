import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // para mover el scroll
  public x: any = fromEvent(document, 'scroll');
  public otherScroll = window.pageXOffset;
  public imagen: boolean;
  public calefon: boolean;

  constructor() {
    this.calefon = false;
  }

  ngOnInit(): void {
    this.scroll();
  }

  /**
   * scroll
   */
  public scroll() {
    this.x.subscribe(
      response => {
        // scrollHeight: 1172
        // scrollLeft: 0
        // scrollTop: 100
        // scrollWidth: 840
        const scroll = response.target.documentElement.scrollTop;
        // console.log(scroll);
        // const navBarfondo = document.querySelector('nav.fondo');

        // if (scroll >= 643) {
        //   navBarfondo.classList.add('fondo2');
        //   this.imagen = true;
        // } else {
        //   navBarfondo.classList.remove('fondo2');
        //   this.imagen = false;
        // }

        if (scroll >= 650 && scroll <= 1363 || scroll >= 2290 && scroll <= 2619) {
          this.calefon = true;
        } else {
          this.calefon = false;
        }

      }
    );
  }

}
