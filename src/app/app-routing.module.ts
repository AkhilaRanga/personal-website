import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './all-components/about/about.component';
import { EducationComponent } from './all-components/education/education.component';
import { ExperienceComponent } from './all-components/experience/experience.component';
import { ProjectsComponent } from './all-components/projects/projects.component';
import { SkillsComponent } from './all-components/skills/skills.component';


const routes: Routes = [
  {path:'', redirectTo:'/about', pathMatch:'full'},
  {path:'about', component:AboutComponent},
  {path:'education', component:EducationComponent},
  {path:'experience', component:ExperienceComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'skills', component:SkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [AboutComponent, EducationComponent, ExperienceComponent, ProjectsComponent]