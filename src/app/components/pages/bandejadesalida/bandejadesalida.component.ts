import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {  SelectionModel  } from '@angular/cdk/collections';
import {  MatTableDataSource } from '@angular/material/table';
import {  MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  remitente: string;
  destinatario: string;
  fecha: string;
  mensaje: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {remitente: 'Amigo 1', destinatario: 'Lisa', fecha: '20/05/21', mensaje: 'Hola guidito 1'},
  {remitente: 'Amigo 2', destinatario: 'Lisa', fecha: '20/05/21', mensaje: 'Hola guidito 2'},
  {remitente: 'Amigo 3', destinatario: 'Lisa', fecha: '20/05/21', mensaje: 'Hola guidito 3'},
];

@Component({
  selector: 'app-bandejadesalida',
  templateUrl: './bandejadesalida.component.html',
  styleUrls: ['./bandejadesalida.component.scss']
})
export class BandejadesalidaComponent implements OnInit {
   @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = ['select', 'remitente', 'destinatario', 'fecha', 'mensaje'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

 ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private router: Router,) {

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
    this.selection.selected.forEach(s => console.log(s.remitente));
  }
}
