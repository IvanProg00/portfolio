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
				key: "Name",
				value: "Ivan Gavrilov"
			},
			{
				key: "Age",
				value: 19
			},
			{
				key: "Address",
				value: "Spain, Barcelona, Vall d'Hebron, 128"
			}, {
				key: "Number",
				value: "+34 690-235-078"
			}, {
				key: "Email",
				value: "gavrilovivan2000@gmail.com"
			}
		];
	}

	ngOnInit(): void {}
}
