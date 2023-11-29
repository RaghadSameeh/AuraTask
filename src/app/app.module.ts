import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayProductsComponent } from 'src/Components/display-products/display-products.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { DeleteConfirmationDialogComponent } from 'src/Components/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { InsertProductComponent } from 'src/Components/insert-product/insert-product.component';
import { HeaderComponent } from 'src/Components/header/header.component';

var routes:Routes=[{path:"",component:DisplayProductsComponent},
{path:"displayproducts", component:DisplayProductsComponent},
{path:"insertproduct", component:InsertProductComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DisplayProductsComponent,
    DeleteConfirmationDialogComponent,
    InsertProductComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
