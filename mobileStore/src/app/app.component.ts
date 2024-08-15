import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { SendDetailsComponent } from './send-details/send-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mobileStore';

  constructor(public dialog:MatDialog){}
  openDialog(): void {
    const dialogRef = this.dialog.open(SendDetailsComponent, {
      width: '800px',
      height:'500px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
