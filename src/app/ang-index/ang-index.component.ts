import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAngIndexComponent } from './dialog-ang-index/dialog-ang-index.component';
export interface DialogData {
  aot: string;
  name: string;
}

@Component({
  selector: 'app-ang-index',
  templateUrl: './ang-index.component.html',
  styleUrls: ['./ang-index.component.css']
})
export class AngIndexComponent implements OnInit {

title='Angular Index';

aot: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAngIndexComponent, {
      data: {aot: 'This is AOT data'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.aot = result;
    });
  }
  ngOnInit() {
  }

}



