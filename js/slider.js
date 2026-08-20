/**
 * Accessible, Touch & Drag-friendly Testimonial & Card Slider
 */

class LuxurySlider {
  constructor(sliderEl, options = {}) {
    this.container = sliderEl;
    this.track = this.container.querySelector('.slider-track');
    this.slides = Array.from(this.container.querySelectorAll('.slider-slide'));
    this.prevBtn = options.prevBtn || document.querySelector(options.prevBtnSelector);
    this.nextBtn = options.nextBtn || document.querySelector(options.nextBtnSelector);
    this.dotsContainer = options.dotsContainer || document.querySelector(options.dotsSelector);
    
    this.currentIndex = 0;
    this.slidesVisible = this.getSlidesVisible();
    this.maxIndex = Math.max(0, this.slides.length - this.slidesVisible);
    
    this.isDragging = false;
    this.startPos = 0;
    this.currentTranslate = 0;
    this.prevTranslate = 0;
    this.animationID = 0;
    
    this.init();
  }

  getSlidesVisible() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  init() {
    if (!this.track || this.slides.length === 0) return;
    
    this.createDots();
    this.updateControls();
    
    // Resize listener
    window.addEventListener('resize', () => {
      const newVisible = this.getSlidesVisible();
      if (newVisible !== this.slidesVisible) {
        this.slidesVisible = newVisible;
        this.maxIndex = Math.max(0, this.slides.length - this.slidesVisible);
        this.currentIndex = Math.min(this.currentIndex, this.maxIndex);
        this.createDots();
        this.goToSlide(this.currentIndex);
      }
    });

    // Button controls
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.prev();
      });
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.next();
      });
    }

    // Touch and mouse events for dragging
    this.track.addEventListener('touchstart', (e) => this.touchStart(e), { passive: true });
    this.track.addEventListener('touchend', () => this.touchEnd());
    this.track.addEventListener('touchmove', (e) => this.touchMove(e), { passive: true });

    this.track.addEventListener('mousedown', (e) => this.touchStart(e));
    this.track.addEventListener('mouseup', () => this.touchEnd());
    this.track.addEventListener('mouseleave', () => this.touchEnd());
    this.track.addEventListener('mousemove', (e) => this.touchMove(e));

    // Keyboard support
    this.container.setAttribute('tabindex', '0');
    this.container.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });
  }

  createDots() {
    if (!this.dotsContainer) return;
    this.dotsContainer.innerHTML = '';
    const totalDots = this.maxIndex + 1;
    
    if (totalDots <= 1) {
      this.dotsContainer.style.display = 'none';
      return;
    }
    
    this.dotsContainer.style.display = 'flex';
    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement('button');
      dot.className = `slider-dot ${i === this.currentIndex ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.style.cssText = `
        width: ${i === this.currentIndex ? '28px' : '8px'};
        height: 8px;
        border-radius: 4px;
        background-color: ${i === this.currentIndex ? 'var(--color-dark)' : 'var(--border-light)'};
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;
      `;
      dot.addEventListener('click', () => this.goToSlide(i));
      this.dotsContainer.appendChild(dot);
    }
  }

  updateDots() {
    if (!this.dotsContainer) return;
    const dots = Array.from(this.dotsContainer.children);
    dots.forEach((dot, idx) => {
      if (idx === this.currentIndex) {
        dot.style.width = '28px';
        dot.style.backgroundColor = 'var(--color-dark)';
      } else {
        dot.style.width = '8px';
        dot.style.backgroundColor = 'var(--border-light)';
      }
    });
  }

  updateControls() {
    if (this.prevBtn) {
      this.prevBtn.disabled = this.currentIndex === 0;
      this.prevBtn.style.opacity = this.currentIndex === 0 ? '0.35' : '1';
      this.prevBtn.style.pointerEvents = this.currentIndex === 0 ? 'none' : 'auto';
    }
    if (this.nextBtn) {
      this.nextBtn.disabled = this.currentIndex >= this.maxIndex;
      this.nextBtn.style.opacity = this.currentIndex >= this.maxIndex ? '0.35' : '1';
      this.nextBtn.style.pointerEvents = this.currentIndex >= this.maxIndex ? 'none' : 'auto';
    }
    this.updateDots();
  }

  goToSlide(index) {
    this.currentIndex = Math.max(0, Math.min(index, this.maxIndex));
    const slidePercent = 100 / this.slidesVisible;
    this.currentTranslate = -this.currentIndex * slidePercent;
    this.prevTranslate = this.currentTranslate;
    this.track.style.transform = `translateX(${this.currentTranslate}%)`;
    this.updateControls();
  }

  prev() {
    if (this.currentIndex > 0) {
      this.goToSlide(this.currentIndex - 1);
    }
  }

  next() {
    if (this.currentIndex < this.maxIndex) {
      this.goToSlide(this.currentIndex + 1);
    }
  }

  touchStart(event) {
    this.isDragging = true;
    this.startPos = this.getPositionX(event);
    this.animationID = requestAnimationFrame(this.animation.bind(this));
  }

  touchEnd() {
    if (!this.isDragging) return;
    this.isDragging = false;
    cancelAnimationFrame(this.animationID);
    const movedBy = this.currentTranslate - this.prevTranslate;
    
    if (movedBy < -5 && this.currentIndex < this.maxIndex) {
      this.next();
    } else if (movedBy > 5 && this.currentIndex > 0) {
      this.prev();
    } else {
      this.goToSlide(this.currentIndex);
    }
  }

  touchMove(event) {
    if (!this.isDragging) return;
    const currentPosition = this.getPositionX(event);
    const diff = currentPosition - this.startPos;
    const containerWidth = this.container.offsetWidth;
    const percentDiff = (diff / containerWidth) * 100;
    this.currentTranslate = this.prevTranslate + percentDiff;
  }

  getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
  }

  animation() {
    if (this.isDragging) {
      this.track.style.transform = `translateX(${this.currentTranslate}%)`;
      requestAnimationFrame(this.animation.bind(this));
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const testimonialSlider = document.querySelector('#testimonials-slider');
  if (testimonialSlider) {
    new LuxurySlider(testimonialSlider, {
      prevBtnSelector: '#test-slider-prev',
      nextBtnSelector: '#test-slider-next',
      dotsSelector: '#test-slider-dots'
    });
  }
});
