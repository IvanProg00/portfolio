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
				title: 'Desarrollo e Implementación de Applicaciones Web',
				school: 'Espai',
				dateStart: new Date(2018, 8),
				dateEnd: new Date(2019, 5),
			},
			{
				title: 'DAM - Desarollo de Aplicaciones Multiplataforma',
				school: 'IFP - Formación Profesional Oficial',
				dateStart: new Date(2019, 8),
				dateEnd: new Date(2021, 5),
			},
		];
	}

	ngOnInit(): void {}
}
