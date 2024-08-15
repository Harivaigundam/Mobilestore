import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-send-details',
  templateUrl: './send-details.component.html',
  styleUrl: './send-details.component.css'
})
export class SendDetailsComponent {

  form!:FormGroup;

  constructor(public dailog:MatDialogRef<SendDetailsComponent>){}

  oncancel(){}

}
