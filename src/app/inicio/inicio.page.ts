import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private router: Router) { }

  openPage(page: string) {
    if (page === 'crear') {
      this.router.navigate(['/crear']);
    } else if (page === 'about') {
      this.router.navigate(['/about']);
    } else if (page === 'registro') {
      this.router.navigate(['/registro']);
    }
  }
  
  ngOnInit() {
  }

}
