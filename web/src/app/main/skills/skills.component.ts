import { Component } from '@angular/core';
import { Skills } from 'src/interfaces';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
	public readonly skills: Skills[];
	constructor() {
		this.skills = [
			{
				title: 'Programming',
				elems: [
					{
						name: 'GoLang',
						progress: 60,
					},
					{
						name: 'Fiber',
						progress: 40,
					},
					{
						name: 'Echo',
						progress: 40,
					},
					{
						name: 'Python',
						progress: 60,
					},
					{
						name: 'Django Framework & Django REST',
						progress: 50,
					},
					{
						name: 'Flask',
						progress: 40,
					},
					{
						name: 'Linux',
						progress: 25,
					},
					{
						name: 'GIT',
						progress: 55,
					},
					{
						name: 'Docker',
						progress: 35,
					},
					{
						name: 'Kubernetes',
						progress: 20,
					},
					{
						name: 'Jenkins',
						progress: 30,
					},
					{
						name: 'Ansible',
						progress: 45,
					},
					{
						name: 'SQL/NoSQL',
						progress: 50,
					},
					{
						name: 'PostgreSQL',
						progress: 40,
					},
					{
						name: 'MySQL/MariaDB',
						progress: 60,
					},
					{
						name: 'MongoDB',
						progress: 60,
					},
					{
						name: 'Redis',
						progress: 20,
					},
					{
						name: 'Rest',
						progress: 60,
					},
					{
						name: 'GraphQL',
						progress: 30,
					},
					{
						name: 'HTML5/CSS3',
						progress: 80,
					},
					{
						name: 'Bootstrap',
						progress: 60,
					},
					{
						name: 'JavaScript',
						progress: 70,
					},
					{
						name: 'TypeScript',
						progress: 45,
					},
					{
						name: 'Angular',
						progress: 65,
					},
					{
						name: 'Vue.js',
						progress: 55,
					},
					{
						name: 'React',
						progress: 50,
					},
					{
						name: 'Electron',
						progress: 25,
					},
					{
						name: 'React Native',
						progress: 35,
					},
					{
						name: 'Flutter',
						progress: 25,
					},
					{
						name: 'JQuery',
						progress: 50,
					},
					{
						name: 'NodeJS',
						progress: 75,
					},
					{
						name: 'Express',
						progress: 80,
					},
					{
						name: 'Gulp',
						progress: 60,
					},
					{
						name: 'Webpack',
						progress: 20,
					},
					{
						name: 'NPM/Yarn',
						progress: 70,
					},
					{
						name: 'Java',
						progress: 15,
					},
					{
						name: 'VertX',
						progress: 45,
					},
					{
						name: 'Spring Boot',
						progress: 10,
					},
					{
						name: 'C#',
						progress: 10,
					},
					{
						name: 'PHP',
						progress: 65,
					},
					{
						name: 'Laravel',
						progress: 25,
					},
					{
						name: 'WordPress',
						progress: 15,
					},
				],
			},
			{
				title: 'Languages',
				elems: [
					{
						name: 'Spanish',
						progress: 65,
					},
					{
						name: 'English',
						progress: 40,
					},
					{
						name: 'Russian',
						progress: 100,
					},
					{
						name: 'Italian',
						progress: 15,
					},
				],
			},
		];
	}
}
