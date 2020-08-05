import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './all-components/sidebar/sidebar.component';
import { AboutComponent } from './all-components/about/about.component';
import { EducationComponent } from './all-components/education/education.component';
import { ExperienceComponent } from './all-components/experience/experience.component';
import { ProjectsComponent } from './all-components/projects/projects.component';
import { SkillsComponent } from './all-components/skills/skills.component';

import { AboutService } from './all-services/about.service';
import { EducationService } from './all-services/education.service';
import { ExperienceService } from './all-services/experience.service';
import { ProjectsService } from './all-services/projects.service';
import { SkillsService } from './all-services/skills.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AboutService,
    EducationService,
    ExperienceService,
    ProjectsService,
    SkillsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
