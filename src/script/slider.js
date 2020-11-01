export default class Slider {
	constructor(card) {
		this.currentSlide = 0;
    this.card = document.querySelector(card);
    this.count = this.card.querySelector('.modal-counter > #s1');
    this.currentCount = this.card.querySelector('.modal-counter > #s2');
    this.slides = this.card.querySelectorAll('.modal-img');
    this.isSlide = false;
	}

	prev(el, index) {
    let opacity = 0.10;
    
    el[index].classList.add('modal-toggle');
    
    const timer = setInterval(() => {
			if (opacity >= 1) {
				clearInterval(timer);
			}
			el[index].style.opacity = opacity;
			opacity += opacity * 0.1;
		}, 10);
	}

	next(el, index) {
		el[index].classList.remove('modal-toggle');
	}

	slidePhoto(event) {
    const target = event.target;
		if (target.matches('.modal-arrow-prev')) {

			this.prev(this.slides, this.currentSlide);
			this.currentSlide--;

			if (this.currentSlide < 0) {
				this.currentSlide = this.slides.length - 1;
			}
			this.next(this.slides, this.currentSlide);
		}

		if (target.matches('.modal-arrow-next')) {

			this.prev(this.slides, this.currentSlide);
			this.currentSlide++;
			if (this.currentSlide >= this.slides.length) {
				this.currentSlide = 0;
			}
			this.next(this.slides, this.currentSlide);
    }
    
    this.count.textContent = this.currentSlide + 1;
  }

  updateCount() {
    this.currentCount.textContent = this.slides.length;
  }

	events() {
    if(!this.isSlide) {
      this.card.addEventListener('click', e => this.slidePhoto(e));
      this.isSlide = true;
    }
  }
  
}
