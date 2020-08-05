import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../../all-services/experience.service'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  public experiences = [];

  constructor(private _experience: ExperienceService) { }

  ngOnInit(): void {
    this._experience.getExperience().subscribe(data => this.experiences = data);
  }

}
