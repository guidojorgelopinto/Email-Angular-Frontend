import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {  SelectionModel  } from '@angular/cdk/collections';
import {  MatTableDataSource } from '@angular/material/table';
import {  MatPaginator } from '@angular/material/paginator';
import { MessageService } from '@app/service/message.service';
import { MessageI } from '@app/models/message.interface';


const MESSAGE_DATA: MessageI []= [
  {from: '{{userId}}', to: '{{to}}', date: '{{createdAt}}', message: '{{body}}'},
  {from: '{{userId}}', to: '{{to}}', date: '{{createdAt}}', message: '{{body}}'},
  {from: '{{userId}}', to: '{{to}}', date: '{{createdAt}}', message: '{{body}}'},
];

@Component({
  selector: 'app-bandejaprincipal',
  templateUrl: './bandejaprincipal.component.html',
  styleUrls: ['./bandejaprincipal.component.scss']
})
export class BandejaprincipalComponent implements OnInit {
   @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = ['select', 'from', 'to', 'date', 'message'];
  // dataSource = new MatTableDataSource<MessageI>(MESSAGE_DATA);
  dataSource!: MatTableDataSource<any>;
  selection = new SelectionModel<MessageI>(true, []);
  menssage: any;

//  ngOnInit() {
//     this.dataSource.paginator = this.paginator;
//   }

  constructor(private router: Router, private messageService: MessageService) {


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
    this.selection.selected.forEach(s => console.log(s.from));
  }


  ngOnInit() {
    this.messageService.getAllMessages().subscribe((data) => {
      this.menssage = data;
      this.dataSource = new MatTableDataSource(this.menssage);
      // console.log(data);
    });
  }
}
