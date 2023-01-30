import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-image',
  template: `
    <div class="d-flex align-items-center slider" (click)="handleSlideShow()">
      <img
        *ngFor="let slide of slides"
        [src]="slide.imgUrl"
        alt="Slide image"
        class="img-fluid slide"
        [ngClass]="{ active: slide.active }"
      />
      <div class="d-none slider-content d-md-flex">
        {{ slideShowOn ? 'Stop' : 'Start' }}
      </div>
    </div>
  `,
  styles: [
    `
      .slider {
        position: relative;
        overflow: hidden;
        cursor: pointer;
        height: 8vw;
        width: 8vw;
        min-height: 50px;
        min-width: 50px;
        margin: auto;
      }

      .slide {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        min-height: 50px;
        min-width: 50px;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
        border-radius: 50%;
      }

      .slide.active {
        opacity: 1;
      }

      .slider-content {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: grey;
        color: white;
        display: flex;
        align-items: end;
        justify-content: center;
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.2s;
        border-radius: 50%;
        padding: 0.5vw;
      }

      .slider:hover .slider-content {
        visibility: visible;
        opacity: 0.5;
      }
    `,
  ],
})
export class SliderImageComponent implements OnInit {
  slides = [
    { imgUrl: 'assets/images/slideshow/photo_2.jpg', active: true },
    {
      imgUrl: 'assets/images/slideshow/IMG_20220309_133129.png',
      active: false,
    },
  ];

  slideShowOn: boolean = true;
  SliderInterval = 4000;
  objInterValues: any;
  ngOnInit(): void {
    this.startImageSlider();
  }

  stopImageSlider() {
    clearInterval(this.objInterValues);
  }

  startImageSlider() {
    this.objInterValues = setInterval(() => {
      this.nextSlide();
    }, this.SliderInterval);
  }

  handleSlideShow() {
    this.slideShowOn = !this.slideShowOn;
    if (this.slideShowOn) this.startImageSlider();
    else this.stopImageSlider();
  }

  prevSlide() {
    const currentIndex = this.slides.findIndex((slide) => slide.active);
    this.slides[currentIndex].active = false;
    if (currentIndex > 0) {
      this.slides[currentIndex - 1].active = true;
    } else {
      this.slides[this.slides.length - 1].active = true;
    }
  }

  nextSlide() {
    const currentIndex = this.slides.findIndex((slide) => slide.active);
    this.slides[currentIndex].active = false;
    if (currentIndex < this.slides.length - 1) {
      this.slides[currentIndex + 1].active = true;
    } else {
      this.slides[0].active = true;
    }
  }
}
