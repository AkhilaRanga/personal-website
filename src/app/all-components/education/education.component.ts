import { Component, OnInit } from '@angular/core';
import { EducationService } from 'src/app/all-services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  public educations = []

  constructor(private _education : EducationService) { }

  ngOnInit() {
    this._education.getEducation().subscribe(data => this.educations = data);
  }

}
