import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appHorizontalCarousel]'
})
export class HorizontalCarouselDirective implements AfterViewInit {
  private carouselContent: HTMLElement;
  private prevButton: HTMLButtonElement;
  private nextButton: HTMLButtonElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.carouselContent = this.el.nativeElement.querySelector('.carousel-content');
    this.prevButton = this.el.nativeElement.querySelector('.prev');
    this.nextButton = this.el.nativeElement.querySelector('.next');

    let currentGroup = 0;
    const itemsPerPage = 5;

    this.renderer.setStyle(this.carouselContent, 'display', 'flex');
    this.renderer.setStyle(this.carouselContent, 'transition', 'transform .7s ease-in-out');

    const totalItems = this.carouselContent.children.length;

    const totalGroups = Math.ceil(totalItems / itemsPerPage);

    this.renderer.listen(this.prevButton, 'click', () => {
      if (currentGroup > 0) {
        currentGroup--;
        this.translateCarousel(currentGroup, totalGroups);
      }
    });

    this.renderer.listen(this.nextButton, 'click', () => {
      if (currentGroup < totalGroups - 1) {
        currentGroup++;
        this.translateCarousel(currentGroup, totalGroups);
      }
    });
  }

  private translateCarousel(currentGroup: number, totalGroups: number): void {
    const translateX = -currentGroup * (100 / (totalGroups + 1));
    this.renderer.setStyle(this.carouselContent, 'transform', `translateX(${translateX}%)`);
  }
}
