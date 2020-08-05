import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { experienceInterface } from './interfaces'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private _url = "assets/experience.json";

  constructor( private http: HttpClient ) { 
  }

  public getExperience() : Observable<experienceInterface[]> {
    return this.http.get<experienceInterface[]>(this._url);
  }

}
