import { Injectable } from '@angular/core';
import { Api } from './../class/api.class';
import { HttpClient } from '@angular/common/http';
import { Commerce } from '../class/commerce';
@Injectable({
  providedIn: 'root'
})
export class CommerceService {
  api: Api;
  constructor(private http: HttpClient) {
    this.api = new Api();
   }

  public getDataGraph(){
    return this.http.get(this.api.urlBase + 'commerces/graph');
  }
}
