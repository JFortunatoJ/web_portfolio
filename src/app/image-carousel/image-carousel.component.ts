import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent implements OnInit {

  @Input()
  public imagesUrls: string[];

  private slideIndex = 1;

  private slides: any;
  private dots: any;

  constructor() {
  }

  ngOnInit(): void {
    this.slides = document.getElementsByClassName('screenshot');
    this.dots = document.getElementsByClassName('dot');

    this.showSlides(this.slideIndex);
  }

  // tslint:disable-next-line:typedef
  plusSlides(n: number){
    this.showSlides(this.slideIndex += n);
  }

  // tslint:disable-next-line:typedef
  currentSlide(n: number){
    this.showSlides(this.slideIndex += n);
  }

  // tslint:disable-next-line:typedef
  showSlides(n) {
    let i;

    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }
    for (i = 0; i < this.slides.length; i++) {
      (this.slides)[i].style.display = 'none';
    }
    for (i = 0; i < this.dots.length; i++) {
      (this.dots)[i].className = (this.dots)[i].className.replace(' active', '');
    }

    (this.slides)[this.slideIndex - 1].style.display = 'block';
    (this.dots)[this.slideIndex - 1].classList.add('active');
  }
}
