import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '@app/service/users.service';
import { BehaviorSubject } from "rxjs";

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

  constructor(private router: Router, private usersService: UsersService) { }

  redireccion1() {
    this.router.navigate(["/login"])
  }

  ngOnInit(): void {
  }

}
