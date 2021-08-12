import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {  SelectionModel  } from '@angular/cdk/collections';
import {  MatTableDataSource } from '@angular/material/table';
import {  MatPaginator } from '@angular/material/paginator';
import { MessageService } from '@app/service/message.service';
import { PostsI } from '../../../models/posts.interface';



const MESSAGE_DATA: PostsI []= [
  // {id: 'string', to: 'string', createdAt: 'string', body: 'string',}
];


// id: string;
// title: string;
// body: string;
// createdAt: string;
// updatedAt: string;
// userId: string;
// to: string;
// token: string;

@Component({
  selector: 'app-bandejaprincipal',
  templateUrl: './bandejaprincipal.component.html',
  styleUrls: ['./bandejaprincipal.component.scss']
})
export class BandejaprincipalComponent implements OnInit {

  message: PostsI[] = [];

  constructor(private router: Router, private messageService: MessageService) {}

   @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = ['select', 'from', 'to', 'date', 'body'];
  dataSource = new MatTableDataSource<PostsI>(MESSAGE_DATA);
  selection = new SelectionModel<PostsI>(true, []);
  menssage: PostsI[] = [];

//  ngOnInit() {
//     this.dataSource.paginator = this.paginator;
//   }



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

  // logSelection() {
  //   this.selection.selected.forEach(s => console.log(s.from));
  // }


  ngOnInit(): void{
    // this.messageService.getAllMessages().subscribe((data) => {
    //   this.menssage = data;
    //   this.dataSource = new MatTableDataSource(this.menssage);
    //   // console.log(data);
    // });

    this.messageService.getAll().subscribe(
      m => this.message=m
    );

  }
}
