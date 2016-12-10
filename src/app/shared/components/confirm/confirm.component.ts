import {Component, OnInit, Input} from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-confirm',
  template: `
    <h4 style="text-align: center">{{ message }}</h4>
    <div class="confirm-actions">
    
      <button md-button
        type="button"
        (click)="dialogRef.close(false)"
      >Cancel</button>
    
      <button md-button
        type="button"
        (click)="dialogRef.close(true)"
      >Confirm</button>
      
    </div>
  `,
  // styleUrls: ['./dashboard.component.scss']
})
export class ConfirmComponent implements OnInit {

  @Input() message: string = 'Are you sure?';

  constructor(
    public dialogRef: MdDialogRef<ConfirmComponent>
  ) { }

  ngOnInit() {
  }

}
