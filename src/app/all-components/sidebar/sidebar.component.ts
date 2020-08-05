import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public name = "Akhila Ranga"
  public sidebar_elements = new Map<string, string>();

  constructor() { 
    this.sidebar_elements.set("About","/about");
    this.sidebar_elements.set("Education","/education");
    this.sidebar_elements.set("Experience","/experience");
    this.sidebar_elements.set("Projects","/projects");
    this.sidebar_elements.set("Skills","/skills");
  }

  ngOnInit(): void {
  }

}
