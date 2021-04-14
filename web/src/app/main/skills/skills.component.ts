import { Component } from '@angular/core';

interface Types {
	name: string;
	progress: number;
}

interface Skills {
	title: string;
	elems: Types[];
}

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
						name: 'HTML5 (Pug, Ejs)',
						progress: 80,
					},
					{
						name: 'CSS3 (Flexbox, Sass, Scss)',
						progress: 80,
					},
					{
						name: 'JavaScript (ES6)',
						progress: 70,
					},
					{
						name: 'TypeScript',
						progress: 45,
					},
					{
						name: 'Angular',
						progress: 45,
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
						progress: 30,
					},
					{
						name: 'Electron',
						progress: 25,
					},
					{
						name: 'React Native',
						progress: 20,
					},
					{
						name: 'NPM',
						progress: 60,
					},
					{
						name: 'Python',
						progress: 60,
					},
					{
						name: 'Django',
						progress: 50,
					},
					{
						name: 'Java',
						progress: 15,
					},
					{
						name: 'Spring',
						progress: 10,
					},
					{
						name: 'C#',
						progress: 10
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
						name: 'SQL',
						progress: 40,
					},
					{
						name: 'NoSQL (MongoDB)',
						progress: 40,
					},
					{
						name: 'XML, JSON',
						progress: 40,
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
