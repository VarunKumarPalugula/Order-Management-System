import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { orderList } from '../orders-list.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  newItem: FormGroup;
  submitted = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddItemComponent>,
    private formBuilder: FormBuilder) {
    this.newItem = this.formBuilder.group({
      orderNumber: [ this.data['orderNumber'], Validators.required],
      customerName: ['', Validators.required],
      orderDueDate: ['', Validators.required],
      customerAddress: ['', Validators.required],
      customerPhone: ['', Validators.required],
      orderTotal: ['', Validators.required]
    });
  }

  ngOnInit() {
    if (this.data.editItem) {
      this.newItem.patchValue({
        orderNumber: this.data.editItem['orderNumber'],
        customerName: this.data.editItem['customerName'],
        orderDueDate: this.data.editItem['orderDueDate'],
        customerAddress: this.data.editItem['customerAddress'],
        customerPhone: this.data.editItem['customerPhone'],
        orderTotal: this.data.editItem['orderTotal']
      });
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  get input(): any {
    return this.newItem.controls;
  }

  onSubmit(): boolean {
    this.submitted = true;
    if (this.newItem.value['customerName'] === '') {
      return;
    }
    const finalData = {
      orderNumber: this.data.orderNumber,
      newItem: this.newItem.value
    };
    this.dialogRef.close(finalData);
  }


}