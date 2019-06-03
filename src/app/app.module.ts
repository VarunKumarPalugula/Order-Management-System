import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatSelectModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatDividerModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatRadioModule,
  MatTabsModule,
  MatProgressBarModule
} from '@angular/material';
import { AddItemComponent } from './order-list/add-item/add-item.component';
import { OrderListComponent } from './order-list/order-list.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { DeleteItemComponent } from './order-list/delete-item/delete-item.component';
@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    OrderListComponent,
    UserLoginComponent,
    DeleteItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [AddItemComponent, DeleteItemComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
