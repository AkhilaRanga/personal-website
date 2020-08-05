import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../all-services/about.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public about;

  constructor(private _about: AboutService ) { }

  ngOnInit(): void {
    this._about.getAbout().subscribe(data => this.about = data);
  }

}
