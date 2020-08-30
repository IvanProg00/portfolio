import { Component, OnInit } from '@angular/core';

interface Card {
	title: string;
	school: string;
	dateStart: Date;
	dateEnd: Date;
}

@Component({
	selector: 'app-education',
	templateUrl: './education.component.html',
	styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
	public cards: Card[];

	constructor() {
		this.cards = [
			{
				title: 'Development and Implementation of Web Applications',
				school: 'Espai',
				dateStart: new Date(2018, 8),
				dateEnd: new Date(2019, 5),
			},
			{
				title: 'DAM - Development of Cross-platform Applications',
				school: 'IFP - Innovation in Vocational Training',
				dateStart: new Date(2019, 8),
				dateEnd: new Date(2021, 5),
			},
		];
	}

	ngOnInit(): void {}
}
