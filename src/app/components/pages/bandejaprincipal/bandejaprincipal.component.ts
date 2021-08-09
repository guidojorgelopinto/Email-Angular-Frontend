import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from '@app/service/message.service';
import { PostsI} from '../../../models/posts.interface';

@Component({
  selector: 'app-bandejaprincipal',
  templateUrl: './bandejaprincipal.component.html',
  styleUrls: ['./bandejaprincipal.component.scss']
})
export class BandejaprincipalComponent implements OnInit {

  posts:PostsI[]=[]

  constructor(private messageService: MessageService) {}


  ngOnInit(): void{
      this.messageService.getAll().subscribe(
        p => this.posts=p
      );
    }
}
