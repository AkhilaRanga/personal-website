import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../all-services/projects.service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public projects = []

  constructor(private _project : ProjectsService) { }

  ngOnInit() {
    this._project.getProject().subscribe(data => this.projects = data);
  }

}
