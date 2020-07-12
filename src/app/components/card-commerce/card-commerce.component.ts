import { Component, OnInit, Input } from '@angular/core';
// class
import { PropertiesCommerce } from 'src/app/class/properties-commerce';
// tools
import { format_number } from './../../tools/tools';

@Component({
  selector: 'app-card-commerce',
  templateUrl: './card-commerce.component.html',
  styleUrls: ['./card-commerce.component.css']
})
export class CardCommerceComponent implements OnInit {
  @Input() commerce: PropertiesCommerce;
  format_number: Function = format_number;
  constructor() { }

  ngOnInit() {
  }

}
