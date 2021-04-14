import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	private readonly words: string[];

	constructor() {
		this.words = [
			'Web Developer',
			'Full Stack Developer',
			'Backend Developer',
			'Frontend Developer',
		];
	}

	ngOnInit(): void {
		new Typed('h2 > span.text', {
			strings: this.words,
			loop: true,
			typeSpeed: 80,
			backSpeed: 50,
			backDelay: 2500,
			contentType: null
		});
	}
}
