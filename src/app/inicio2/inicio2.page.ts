import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio2',
  templateUrl: './inicio2.page.html',
  styleUrls: ['./inicio2.page.scss'],
})
export class Inicio2Page implements OnInit {

  constructor(private router: Router) { }

  openPage(page: string) {
    if (page === 'scan') {
      this.router.navigate(['/scan']);
    } else if (page === 'about') {
      this.router.navigate(['/about']);
    } else if (page === 'registro') {
      this.router.navigate(['/registro']);
    }
  }
  ngOnInit() {
  }

}
