import { Component, OnInit } from '@angular/core';
import { Card } from 'src/interfaces';


@Component({
	selector: 'app-education',
	templateUrl: './education.component.html',
	styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
	public cards: Card[] = [
			{
				title: 'Development and Implementation of Web Applications',
				school: 'Espai',
				dateStart: new Date(2018, 8),
				dateEnd: new Date(2019, 5),
			},
			{
				title: 'DAM - Development of Cross-platform Applications',
				school: 'IFP - Grupo Planeta',
				dateStart: new Date(2019, 8),
				dateEnd: new Date(2021, 5),
			},
		];

	constructor() {
	}

	ngOnInit(): void {}
}
