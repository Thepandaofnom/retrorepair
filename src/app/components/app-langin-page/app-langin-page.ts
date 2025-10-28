import { Component, OnInit } from '@angular/core';
import { SideMenu } from '../side-menu/side-menu';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-app-langin-page',
  imports: [
    SideMenu
  ],
  templateUrl: './app-langin-page.html',
  styleUrl: './app-langin-page.css'
})
export class AppLanginPage implements OnInit{

  constructor(private productService: ProductService){}

  ngOnInit(): void { 
    this.productService.getAllProducts().subscribe(data => {
      console.log(data);
    })
  }

}
