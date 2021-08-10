import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {  SelectionModel  } from '@angular/cdk/collections';
import {  MatTableDataSource } from '@angular/material/table';
import {  MatPaginator } from '@angular/material/paginator';
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

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = ['select', 'remitente', 'destinatario', 'fecha', 'mensaje'];
  dataSource = new MatTableDataSource<PostsI>(messtab);
  selection = new SelectionModel<PostsI>(true, []);

 ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    this.messageService.getAll().subscribe(
      p => this.posts=p
    );

  }

  constructor(private router: Router, private messageService: MessageService) {

  }

  redireccion1() {
    this.router.navigate(["/login"])
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  logSelection() {
    this.selection.selected.forEach(s => console.log(s.title));
  }
}
