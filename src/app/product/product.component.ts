import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',  // Tag name
  templateUrl: './product.component.html', // html file
  styleUrls: ['./product.component.css'] // css file
})

export class ProductComponent implements OnInit {
    names = "Phone";
    modle = "X";
    price = "67000";
    constructor() { }
    ngOnInit(): void {
    }
}