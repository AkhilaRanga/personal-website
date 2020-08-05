import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { aboutInterface } from './interfaces'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private _url = "assets/about.json"

  constructor(private http: HttpClient) { }
  
  public getAbout() : Observable<aboutInterface> {
    return this.http.get<aboutInterface>(this._url);
   }

}