import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {  SelectionModel  } from '@angular/cdk/collections';
import {  MatTableDataSource } from '@angular/material/table';
import {  MatPaginator } from '@angular/material/paginator';
import { MessageService } from '@app/service/message.service';
import { PostsI } from '../../../models/posts.interface';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-bandejaprincipal',
  templateUrl: './bandejaprincipal.component.html',
  styleUrls: ['./bandejaprincipal.component.scss']
})
export class BandejaprincipalComponent implements OnInit {
    [x: string]: any;

    constructor(private router: Router, private messageService: MessageService) {}

    ELEMENT_DATA!: PostsI [];
    displayedColumns: string[] = ['select', 'id', 'title', 'body', 'userId'];
    dataSource = new MatTableDataSource<PostsI>(this.ELEMENT_DATA);
    selection = new SelectionModel<PostsI>(true, []);

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
      if (this.isAllSelected()) {
        this.selection.clear();
        return;
      }

      this.selection.select(...this.dataSource.data);
    }

    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: PostsI): string {
      if (!row) {
        return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
      }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.userId}`;
    }

    ngOnInit(){
      this.getAllPosts();
      // this.deleteAll();
    }

    public getAllPosts() {
      let resp = this.messageService.bring();
      resp.subscribe(report =>this.dataSource.data = report as PostsI[])

    }

}
