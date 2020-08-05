import { Injectable } from '@angular/core';
import { projectsInterface } from './interfaces'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private _url = "assets/projects.json"

  constructor(private http: HttpClient) { }

  public getProject(): Observable<projectsInterface[]> {
    return this.http.get<projectsInterface[]>(this._url);
  }

}
