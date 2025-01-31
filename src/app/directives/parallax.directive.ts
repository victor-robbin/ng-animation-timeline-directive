import { Directive, ElementRef, HostListener, inject, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appParallax]',
  standalone: true,
})
export class ParallaxDirective {
  elem = inject(ElementRef);
  renderer = inject(Renderer2);

  @Input() parallaxRatio: number = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const translateY = scrollPosition * this.parallaxRatio;

    this.renderer.setStyle(this.elem.nativeElement, 'transform', `translateY(${translateY}px)`);
  }
}
