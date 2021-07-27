import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {  SelectionModel  } from '@angular/cdk/collections';
import {  MatTableDataSource } from '@angular/material/table';
import {  MatPaginator } from '@angular/material/paginator';
import { MessageService } from '@app/service/message.service';

export interface MessageParts {
  from: string;
  to: string;
  date: string;
  message: string;
}

const MESSAGE_DATA: MessageParts[] = [
  {from: 'Amigo 1', to: 'Lisa', date: '20/05/21', message: 'Hola guidito 1'},
  {from: 'Amigo 2', to: 'Lisa', date: '20/05/21', message: 'Hola guidito 2'},
  {from: 'Amigo 3', to: 'Lisa', date: '20/05/21', message: 'Hola guidito 3'},
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
  dataSource = new MatTableDataSource<MessageParts>(MESSAGE_DATA);
  selection = new SelectionModel<MessageParts>(true, []);

 ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

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









}
