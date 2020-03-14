import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogsucess',
  templateUrl: './dialogsucess.component.html',
  styleUrls: ['./dialogsucess.component.scss']
})
export class DialogsucessComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogsucessComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}



  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
