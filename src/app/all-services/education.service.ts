import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { educationInterface } from './interfaces'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private _url = "assets/education.json"

  constructor(private http: HttpClient) { }

  public getEducation(): Observable<educationInterface[]> {
    return this.http.get<educationInterface[]>(this._url);
  }

}
