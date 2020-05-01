import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	private header: any;
	private headerSize: number;
	private headerElems: any;
	private main: any;
	private sections: any;

	constructor() {}

	ngOnInit(): void {
		this.headerElems = document.querySelectorAll('header div.nav a');
		this.header = document.querySelector('header');
		this.main = document.querySelector('main');
		this.sections = document.querySelectorAll('section');

		this.headerSize = this.header.offsetHeight;
		this.main.style.marginTop = `${this.headerSize}px`;
		this.navigation();
		this.position();
	}

	navigation(): void {
		this.headerElems.forEach((item: HTMLElement) => {
			item.addEventListener('click', (event: any) => {
				event.preventDefault();
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

		this.sections.forEach((item, i) => {
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
