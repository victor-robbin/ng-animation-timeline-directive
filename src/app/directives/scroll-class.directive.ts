import { Directive, ElementRef, HostListener, inject, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollClass]',
  standalone: true,
})
export class ScrollClassDirective {
  elem = inject(ElementRef);
  renderer = inject(Renderer2);

  @Input() scrollClass = '';
  @Input() scrollThreshold = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > this.scrollThreshold) {
      this.renderer.addClass(this.elem.nativeElement, this.scrollClass);
    } else {
      this.renderer.removeClass(this.elem.nativeElement, this.scrollClass);
    }
  }
}
