import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../all-services/skills.service'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skills;

  constructor(private _skills: SkillsService ) { }

  ngOnInit(): void {
    this._skills.getAbout().subscribe(data => this.skills = data);
  }

}
