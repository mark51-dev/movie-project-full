import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[hideCursor]',
})
export class HideCursorDirective {
  private hideCursor: boolean = false;

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hideCursor = true;
    this.el.nativeElement.style.cursor = 'none';
  }

  @HostListener('mousemove')
  onMouseMove() {
    if (this.hideCursor) {
      this.showCursor();
    }

    // Установим таймаут для следующего скрытия курсора через 4 секунды
    setTimeout(() => {
      this.hideCursor = true;
      this.el.nativeElement.style.cursor = 'none';
    }, 3000);
  }

  private showCursor() {
    this.hideCursor = false;
    this.el.nativeElement.style.cursor = 'auto';
  }

}
