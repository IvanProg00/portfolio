import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { MainComponent } from './main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
	declarations: [
		AboutComponent,
		ContactComponent,
		EducationComponent,
		HomeComponent,
		SkillsComponent,
		MainComponent,
	],
	imports: [CommonModule, FontAwesomeModule],
	exports: [MainComponent],
})
export class MainModule {}
