import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { Project1DescriptionComponent } from './project1-description/project1-description.component';
import { P2Component } from './p2/p2.component';
import { P3Component } from './p3/p3.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', component:AboutComponent },
  { path: 'contact', component:ContactComponent },
  { path: 'home', component:HomeComponent },
  { path: 'projects', component:ProjectsComponent },
  { path: 'certificates', component:ResumeComponent },
  { path: 'service', component:ServicesComponent },
  { path: 'skills', component:SkillsComponent },
  { path: 'P1', component:Project1DescriptionComponent },
  { path: 'P2', component:P2Component},
  { path: 'P3', component:P3Component},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
