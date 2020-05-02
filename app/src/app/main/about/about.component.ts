import { Component, OnInit } from '@angular/core';

interface Info {
	key: string;
	value: string | number;
}

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
	public readonly info: Info[];

	constructor() {
		this.info = [
			{
				key: 'Name',
				value: 'Ivan Gavrilov',
			},
			{
				key: 'Date Of Birth',
				value: '30/10/2000',
			},
			{
				key: 'Address',
				value: "Spain, Barcelona, Vall d'Hebron, 128, 7A",
			},
			{
				key: 'Nationality',
				value: 'Russia',
			},
			{
				key: 'Phone',
				value: '+34 (690) 235 078',
			},
			{
				key: 'Email',
				value: 'gavrilovivan2000@gmail.com',
			},
		];
	}

	ngOnInit(): void {}
}
