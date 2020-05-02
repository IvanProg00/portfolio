import { Component, OnInit } from '@angular/core';

interface Contacts {
	title: string;
	link?: string;
	icon: string;
	class: string;
}

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
	public contacts: Contacts[];

	constructor() {
		this.contacts = [
			{
				title: 'LinkedIn',
				link: 'https://www.linkedin.com/in/ivan-gavrilov-9369331a3/',
				icon: 'fab fa-linkedin',
				class: 'linkedin',
			},
			{
				title: 'WhatsApp +34 (690) 235 078',
				icon: 'fab fa-whatsapp-square',
				class: 'whatsapp',
			},
		];
	}

	ngOnInit(): void {}
}
