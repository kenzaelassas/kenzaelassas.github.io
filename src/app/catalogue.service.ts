import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  public host = 'http://localhost:4200';

  constructor(private http: HttpClient) { }
    public  getResource(url) {
      return this.http.get( this.host + url);
    }

}
