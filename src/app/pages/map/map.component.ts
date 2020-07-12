// dependecies
import { Component, OnInit } from '@angular/core';
// class
import { Setting } from './../../class/setting.class';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  setting: Setting;
  constructor() {
    this.setting = new Setting();
  }
  ngOnInit() {
  }
}
