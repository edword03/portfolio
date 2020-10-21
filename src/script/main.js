export default class Portfolio {
	constructor(header, arrowDown, menu) {
		this.header = document.querySelector(header);
		this.arrowDown = document.querySelector(arrowDown);
		this.menu = document.querySelector(menu);
	}
	showHeader() {
		if (window.pageYOffset >= 715) {
			this.header.style.display = 'block';
		} else {
			this.header.style.display = 'none';
		}
	}

	arrowMove(e) {
		e.preventDefault();
		this.arrowDown.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	}

	showScroll(event, target) {
		event.preventDefault();
		const link = target.getAttribute('href').substring(1);
		document.getElementById(link).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	}

	toggleMenu() {
		this.menu.classList.toggle('hidden-menu');
	}

	headerLink(e) {
		const target = e.target;

		if (target.matches('a[href*="#"')) {
			this.showScroll(e, target);
		} else if (target.matches('.modal-toggle') || target.matches('.burger')) {
			this.toggleMenu();
		}
	}

	menuLinksMove(e) {
		e.preventDefault();
		const target = e.target;

		if (target.matches('a[href*="#"')) {
			this.showScroll(e, target);
			this.toggleMenu();
		}
		if (target.matches('.close')) {
			this.toggleMenu();
		}
	}


	events() {
		window.addEventListener('scroll', this.showHeader.bind(this));
		this.arrowDown.addEventListener('click', this.arrowMove.bind(this));
		this.header.addEventListener('click', e => this.headerLink(e));
		this.menu.addEventListener('click', e => this.menuLinksMove(e));
	}

}
