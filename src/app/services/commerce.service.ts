import { Injectable } from '@angular/core';
import { Setting } from '../class/setting.class';
import { HttpClient } from '@angular/common/http';
import { Commerce } from '../class/commerce';
@Injectable({
  providedIn: 'root'
})
export class CommerceService {
  setting: Setting;
  constructor(private http: HttpClient) {
    this.setting = new Setting();
   }

  public getDataGraph() {
    return this.http.get(this.setting.urlBase + 'commerces/graph');
  }

  public getDataCommerces(){
    return this.http.get(this.setting.urlBase + 'commerces');
  }
}
