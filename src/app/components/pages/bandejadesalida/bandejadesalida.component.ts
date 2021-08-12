import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '@app/service/message.service';
import { PostsI } from '../../../models/posts.interface';

const messtab: PostsI[] = [

];

@Component({
  selector: 'app-bandejadesalida',
  templateUrl: './bandejadesalida.component.html',
  styleUrls: ['./bandejadesalida.component.scss']
})
export class BandejadesalidaComponent implements OnInit {

  posts:PostsI[]=[]

  constructor(private messageService: MessageService) {}


  ngOnInit(): void{
      this.messageService.getAll().subscribe(
        p => this.posts=p,
      );
    }
}
