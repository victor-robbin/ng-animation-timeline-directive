import { AfterViewInit, Directive, ElementRef, inject, Input, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appVisibilityClass]',
  standalone: true,
})
export class VisibilityClassDirective implements AfterViewInit, OnDestroy {
  elem = inject(ElementRef);
  renderer = inject(Renderer2);

  @Input() visibleClass = '';
  @Input() visibleThreshold = 0;

  private observer!: IntersectionObserver;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.elem.nativeElement, this.visibleClass);
        } else {
          this.renderer.removeClass(this.elem.nativeElement, this.visibleClass);
        }
      },
      { threshold: this.visibleThreshold }
    );
    this.observer.observe(this.elem.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
