import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '@app/service/users.service';
import { UserI } from '../../models/users.interface'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  users:UserI[] = []

  constructor(private router:Router, private usersService: UsersService) {}


  ngOnInit(): void{
      this.usersService.getAll().subscribe(
        (        u: UserI[]) => this.users = u,
      );
    }

    signOut() {

    }

}
