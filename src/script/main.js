import Slider from "./slider";

export default class Portfolio {
	constructor(header, arrowDown, menu, works, arrowUp) {
		this.header = document.querySelector(header);
		this.arrowDown = document.querySelector(arrowDown);
		this.menu = document.querySelector(menu);
    this.works = document.querySelector(works);
    this.arrowUp = document.querySelector(arrowUp);
    this.isResizeble = false;
    this.slide1 = new Slider('#card-1');
    this.slide2 = new Slider('#card-2');
    this.slide3 = new Slider('#card-3');
    this.slide4 = new Slider('#card-4');
    this.slide5 = new Slider('#card-5');
    this.slide6 = new Slider('#card-6');
	}
	fadeIn(el, check, className) {
    let opacity = 0.10;
    if(check) {
      el.style.display = "block";
    } else {
      el.classList.add(className)
    }

		const timer = setInterval(() => {
			if (opacity >= 1) {
				clearInterval(timer);
			}
			el.style.opacity = opacity;
			opacity += opacity * 0.1;
		}, 10);

	}

	fadeOut(el, check, className) {
		let opacity = 1;
		const timer = setInterval(() => {

			if (opacity <= 0.1) {
        clearInterval(timer);
        if(check) {
          el.style.display = "none";
        } else {
          el.classList.remove(className);
        }
			}
			el.style.opacity = opacity;
			opacity -= opacity * 0.1;
		}, 10);
	}

	showHeader() {
		if (window.pageYOffset >= 715) {
			if (!this.isResizeble) {
				this.isResizeble = true;
				this.fadeIn(this.header, true);
			}
			this.header.style.display = 'block';
		} else if (window.pageYOffset <= 700 && this.isResizeble) {
			this.fadeOut(this.header, true);
			this.isResizeble = false;
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
    const addClass = () => {
      let opacity = 1;

      this.menu.classList.add('hidden-menu');

      const timer = setInterval(() => {
        if (opacity <= 0.1) {
          clearInterval(timer);
        }
        
        this.menu.style.opacity = opacity;
        opacity -= opacity * 0.1;
      }, 10);

      document.body.style.overflow = 'visible';
    };

    const removeClass = () => {
      let opacity = 0.10;

      this.menu.classList.remove('hidden-menu');

      const timerUp = setInterval(() => {
        if (opacity >= 1) {
          clearInterval(timerUp);
      }
  
        this.menu.style.opacity = opacity;
        opacity += opacity * 0.1;
      }, 10);

      document.body.style.overflow = 'hidden';
    };

    if (this.menu.matches('.hidden-menu')) {
      removeClass();
    } else  {
      addClass();
    }
    
	}

	headerLink(e) {
		const target = e.target;

		if (target.matches('a[href*="#"')) {
			this.showScroll(e, target);
		} else if (target.matches('.modal-toggle') || target.matches('.burger')) {
			this.toggleMenu(e);
		}
	}

	menuLinksMove(e) {
		e.preventDefault();
		const target = e.target;

		if (target.matches('a[href*="#"')) {
			this.showScroll(e, target);
			this.toggleMenu(e);
		}
		if (target.matches('.close')) {
			this.toggleMenu(e);
		}
	}
	closeModal(el) {
		document.body.style.overflow = 'hidden';
		this.fadeIn(el, false, 'modal--visible')
		el.addEventListener('click', e => {
			const target = e.target;

			if (target.matches('.modal-work') || target.matches('.close-icon')) {
				this.fadeOut(el, false, 'modal--visible')
        document.body.style.overflow = 'visible';
			}
		});
	}

	openModal(e) {
		const target = e.target;
		const modals = document.querySelectorAll('.modal-work');
		if (target.matches('#m1')) {
      this.closeModal(modals[0]);
      this.slide1.updateCount();
      this.slide1.events();      
		}
		if (target.matches('#m2')) {
      this.closeModal(modals[1]);
      this.slide2.updateCount();
      this.slide2.events();
		}
		if (target.matches('#m3')) {
      this.closeModal(modals[2]);
      this.slide3.updateCount();
      this.slide3.events();
		}
		if (target.matches('#m4')) {
      this.closeModal(modals[3]);
      this.slide4.updateCount();
      this.slide4.events();
		}
		if (target.matches('#m5')) {
      this.closeModal(modals[4]);
      this.slide5.updateCount();
      this.slide5.events();
		}
		if (target.matches('#m6')) {
      this.closeModal(modals[5]);
      this.slide6.updateCount();
      this.slide6.events();
		}
	}


	events() {
		window.addEventListener('scroll', this.showHeader.bind(this));
		this.arrowDown.addEventListener('click', this.arrowMove.bind(this));
		this.header.addEventListener('click', e => this.headerLink(e));
		this.menu.addEventListener('click', e => this.menuLinksMove(e));
    this.works.addEventListener('click', e => this.openModal(e));
    this.arrowUp.addEventListener('click', e => this.toUp(e))
  }
  
  toUp( event){
    event.preventDefault();
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    })
  }

}
