import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface PeriodicElement {
  remitente: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {remitente: 'Amigo 1'},
];

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor(private router: Router,) { }

  redireccion1() {
    this.router.navigate(["/login"])
  }

  ngOnInit(): void {
  }

}
