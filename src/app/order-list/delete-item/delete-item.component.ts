import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.scss']
})
export class DeleteItemComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteItemComponent>) { }

  ngOnInit() {
  }

  deleteItem(data) : void {
    this.dialogRef.close(data);
  }
}
