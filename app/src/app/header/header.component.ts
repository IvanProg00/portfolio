import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	private headerSize: number;
	private header: any;
	private headerElems: any;
	private main: any;
	private sections: any;
	private hamburger: any;
	private nav: any;

	constructor() {}

	ngOnInit(): void {
		this.headerElems = document.querySelectorAll('header div.nav a');
		this.header = document.querySelector('header');
		this.main = document.querySelector('main');
		this.sections = document.querySelectorAll('section');
		this.hamburger = document.querySelector(
			'header > div.nav > div.hamburger'
		);
		this.nav = document.querySelector('header > div.nav');

		this.headerSize = this.header.offsetHeight;
		this.main.style.marginTop = `${this.headerSize}px`;
		this.hamburgerNavigation();
		this.navigation();
		this.position();
	}

	hamburgerNavigation(): void {
		this.hamburger.addEventListener('click', () => {
			this.nav.classList.toggle('selected');
		});
	}

	navigation(): void {
		this.headerElems.forEach((item: HTMLElement) => {
			item.addEventListener('click', (event: any) => {
				event.preventDefault();
				this.closeHamburger();
				let idElement = event.target.getAttribute('href');
				let elem = document.querySelector(idElement);
				let pos = this.getPositionElement(elem);

				window.scrollTo({
					behavior: 'smooth',
					top: pos,
				});
			});
		});
	}

	closeHamburger(): void {
		this.nav.classList.remove('selected');
	}

	getPositionElement(elem: any): number {
		return elem.offsetTop - this.headerSize;
	}

	position(): void {
		this.animatePos();
		window.addEventListener('scroll', () => {
			this.animatePos();
		});
		window.addEventListener('resize', () => {
			this.animatePos();
		});
	}
	animatePos(): void {
		let pos = this.getPosition();
		this.clearHeaderElems();

		this.sections.forEach((item: any) => {
			let top = this.getPositionElement(item);
			let bottom = top + item.offsetHeight;
			if (top <= pos && bottom > pos) {
				this.searchHeaderElems(item.id);
			}
		});
	}
	clearHeaderElems(): void {
		this.headerElems.forEach((item: any) => {
			item.classList.remove('selected');
		});
	}
	searchHeaderElems(id: string): void {
		this.headerElems.forEach((item: any) => {
			if (item.getAttribute('href') === `#${id}`) {
				item.classList.add('selected');
			}
		});
	}
	getPosition(): number {
		return window.pageYOffset;
	}
}
