import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DailogComponentComponent} from '../dailog-component/dailog-component.component';

@Component({
  selector: 'app-angular-dialog',
  templateUrl: './angular-dialog.component.html',
  styleUrls: ['./angular-dialog.component.less']
})
export class AngularDialogComponent {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DailogComponentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  } 
 

}

 