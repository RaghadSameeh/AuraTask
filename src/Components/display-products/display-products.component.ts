import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/Models/product';
import { DeleteProductsService } from 'src/Services/delete-products.service';
import { DisplayProductsService } from 'src/Services/display-products.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';


@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {
  products:any[]=[];
  displayedColumns: string[] = ['id', 'name', 'activated','delete']; 
  constructor(private route:ActivatedRoute,
    private displayServices:DisplayProductsService,
     private deletedProduct:DeleteProductsService,
     private dialog: MatDialog) {
    
  }
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.displayServices.displayProducts().subscribe((data:any)=>{
      this.products= data.data;
       console.log(this.products);
    })

  }

  deleteProduct(id:number){
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deletedProduct.deleteProduct(id).subscribe(
          (response) => {
            console.log(response.data);
            this.getAll();
          },
          (error) => {
            console.log(error);
          }
        );
      }
    });
  }

  }







