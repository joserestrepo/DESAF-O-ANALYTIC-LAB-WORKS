import { Component, OnInit, Input } from '@angular/core';

// class
import { PropertiesCommerce } from 'src/app/class/properties-commerce';
// tools
import { format_number } from './../../tools/tools';
@Component({
  selector: 'app-modal-commerce',
  templateUrl: './modal-commerce.component.html',
  styleUrls: ['./modal-commerce.component.css']
})
export class ModalCommerceComponent implements OnInit {
  @Input() commerce: PropertiesCommerce;
  format_number: Function = format_number;
  constructor() { }

  ngOnInit() {
  }

}
