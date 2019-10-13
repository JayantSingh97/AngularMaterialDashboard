import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MatrailTableDataSource } from './matrail-table-datasource';

@Component({
  selector: 'app-matrail-table',
  templateUrl: './matrail-table.component.html',
  styleUrls: ['./matrail-table.component.less'],
})
export class MatrailTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatrailTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','phone','Country'];

  ngOnInit() {
    this.dataSource = new MatrailTableDataSource(this.paginator, this.sort);
  }
}
