import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InsertProductsService } from 'src/Services/insert-products.service';


@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.css']
})
export class InsertProductComponent {
   productForm:FormGroup;

  constructor(private formBuilder: FormBuilder,private insertService: InsertProductsService, private router: Router) {
  this.productForm= this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      activated: [false, Validators.required]

    })
}

onSubmit(){
  const productData = this.productForm.value;
  console.log(productData);

  this.insertService.insertProduct(productData).subscribe((response)=>
  {
    console.log(response);
    this.router.navigate(['displayproducts'])

  },
  (error)=>{
    console.log(error);
  }
  ) 
}
}




  


