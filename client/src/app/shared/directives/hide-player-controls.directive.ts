import {AfterViewInit, Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[hidePlayerControls]'
})
export class HidePlayerControlsDirective implements AfterViewInit {
  private timeout: any;
  private controlsWrapper: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.showElement();
    this.resetTimeout();
  }

  @HostListener('mousemove')
  onMouseMove() {
    this.showElement();
    this.hideElementAfterDelay();
  }

  private resetTimeout() {
    clearTimeout(this.timeout);
  }

  private hideElementAfterDelay() {
    this.resetTimeout();
    this.timeout = setTimeout(() => {
      this.renderer.removeClass(this.controlsWrapper, 'show-element');
    }, 3000);
  }

  private showElement() {
    this.renderer.addClass(this.controlsWrapper, 'show-element');
  }

  ngAfterViewInit() {
    this.controlsWrapper = this.el.nativeElement.querySelector('.controls-wrapper');
  }

}
