import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource,} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

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
  selector: 'app-bandejaprincipal',
  templateUrl: './bandejaprincipal.component.html',
  styleUrls: ['./bandejaprincipal.component.scss']
})
export class BandejaprincipalComponent implements OnInit {
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



  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  logSelection() {
    this.selection.selected.forEach(s => console.log(s.remitente));
  }
}













