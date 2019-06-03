import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { orderList } from './orders-list.model';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { AddItemComponent } from './add-item/add-item.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  dataSource; allOrders: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayColumns = ['orderNumber', 'customerName', 'orderDueDate', 'customerAddress', 'customerPhone', 'orderTotal', 'modify'];
  constructor(private http: HttpClient, public dialog: MatDialog) { }

  ngOnInit() {
    this.http.get('../assets/orders-list.json').subscribe((data: orderList) => {
      this.allOrders = data;
      this.dataSource = new MatTableDataSource<orderList>(this.allOrders);
      this.dataSource.paginator = this.paginator;
    });
  }

  addItem(): void {
    this.openDialog(this.allOrders.length + 1, null);
  }

  editItem(orderNumber, editItem) : void {
    this.openDialog(orderNumber, editItem);
  }

  openDialog(orderNumber, editItem): void {
    const dialogRef = this.dialog.open(AddItemComponent, {
      width: '60%',
      height: 'auto',
      disableClose: true,
      data: {
        orderNumber: orderNumber,
        editItem: editItem
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      let newItem = true;
      for (let a = 1; a < this.allOrders.length; a++) {
        if (result['orderNumber'] === this.allOrders[a]['orderNumber']) {
          this.allOrders[a] = result['newItem'];
          newItem = false;
        }
      }
      if (newItem) {
        this.allOrders.push(result['newItem']);
      }
      this.dataSource = new MatTableDataSource<orderList>(this.allOrders);
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteItem(removeItem): void {
    const dialogRef = this.dialog.open(DeleteItemComponent, {
      width: 'auto',
      height: 'auto',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.allOrders = this.allOrders.filter(function (value, index, arr) {
          return index !== removeItem;
        });
        this.dataSource = new MatTableDataSource<orderList>(this.allOrders);
        this.dataSource.paginator = this.paginator;
      }
    });
  }

}
