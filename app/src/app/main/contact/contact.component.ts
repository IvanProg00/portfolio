import { Component, OnInit } from '@angular/core';
import {
	faLinkedin,
	faWhatsapp,
	faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface Contacts {
	title: string;
	link?: string;
	icon: any;
	class: string;
	styles: any;
}

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
	public contacts: Contacts[];
	public styles: any = {};

	constructor() {
		this.styles = {
			'font-size': '28px',
			"margin-right": "10px",
		};

		this.contacts = [
			{
				title: 'LinkedIn',
				link: 'https://www.linkedin.com/in/ivan-gavrilov-9369331a3/',
				icon: faLinkedin,
				class: 'linkedin',
				styles: {
					...this.styles,
					color: '#0074af',
				},
			},
			{
				title: 'WhatsApp',
				link: 'https://wa.me/34690235078',
				icon: faWhatsapp,
				class: 'whatsapp',
				styles: {
					...this.styles,
					color: '#0ab426',
				},
			},
			{
				title: 'GitHub',
				link: 'https://github.com/IvanProg00',
				icon: faGithub,
				class: 'github',
				styles: {
					...this.styles,
					color: '#323131',
				},
			},
			{
				title: 'Email',
				link: 'mailto:gavrilovivan2000@gmail.com',
				icon: faEnvelope,
				class: 'email',
				styles: {
					...this.styles,
					color: '#1762AB',
				},
			},
		];
	}

	ngOnInit(): void {}
}
