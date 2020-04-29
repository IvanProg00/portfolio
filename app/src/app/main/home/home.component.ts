import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	private elemAnimate: HTMLHeadingElement;
	private readonly words: string[];
	private speed: number;

	constructor() {
		this.words = ['Web Developer', 'Full Stack', 'Programmer'];
		this.speed = 3000;
	}

	ngOnInit(): void {
		this.elemAnimate = document.querySelector('h2 > span.text');

		this.animateWords();
	}

	animateWords(): void {
		let now: number = 0;
		let last: number = this.words.length - 1;
		this.putWord(now, last);

		setInterval(() => {
			last = now++;
			if (now >= this.words.length) {
				now = 0;
			}

			this.putWord(now, last);
		}, this.speed);
	}

	putWord(now, last): void {
		let time1: number = this.speed * 0.3;
		let time2: number = this.speed * 0.5;
		let count = 0;

		let interval1 = setInterval(() => {
			this.elemAnimate.textContent += this.words[now][count];
			count++;
			if (count >= this.words[now].length) {
				clearInterval(interval1);
			}
		}, time1 / this.words[now].length);
		setTimeout(() => {
			let interval2 = setInterval(() => {
				this.elemAnimate.textContent = this.elemAnimate.textContent.slice(0, -1);
				count--;
				if (count < 0) {
					clearInterval(interval2);
				}
			}, time1 / this.words[now].length);
		}, time2);
	}
}
