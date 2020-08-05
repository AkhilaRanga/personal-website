import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { skillsInterface } from './interfaces'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private _url = "assets/skills.json"

  constructor(private http: HttpClient) { }
  
  public getAbout() : Observable<skillsInterface> {
    return this.http.get<skillsInterface>(this._url);
   }

}
