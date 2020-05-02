import { Component } from '@angular/core';

interface Types {
		name: string;
		progress: number;
}

interface Skills {
	title: string;
	elems: Types[]
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
						progress: 90,
					},
					{
						name: 'CSS3 (Flexbox, Sass, Scss)',
						progress: 80,
					},
					{
						name: 'JavaScript (ES6)',
						progress: 90,
					},
					{
						name: 'TypeScript',
						progress: 40,
					},
					{
						name: 'Angular',
						progress: 60,
					},
					{
						name: 'Vue.js',
						progress: 60,
					},
					{
						name: 'JQuery',
						progress: 40,
					},
					{
						name: 'NodeJS',
						progress: 90,
					},
					{
						name: 'Express',
						progress: 90,
					},
					{
						name: 'Gulp',
						progress: 60,
					},
					{
						name: 'PHP',
						progress: 80,
					},
					{
						name: 'Laravel',
						progress: 20,
					},
					{
						name: 'GIT',
						progress: 60,
					},
					{
						name: 'Java',
						progress: 60,
					},
					{
						name: 'Linux',
						progress: 30,
					},
					{
						name: 'SQL',
						progress: 40,
					},
					{
						name: 'MySQL',
						progress: 40,
					},
					{
						name: 'NPM',
						progress: 80,
					},
				],
			},
			{
				title: "Languages",
				elems: [
					{
						name: "Spain",
						progress: 80
					},{
						name: "English",
						progress: 40
					}, {
						name: "Russian",
						progress: 100
					}, {
						name: "Italian",
						progress: 20
					}
				]
			}
		];
	}
}
