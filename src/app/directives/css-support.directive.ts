import { Directive, effect, HostBinding, signal } from '@angular/core';

@Directive({
  selector: '[appCssSupport]',
  standalone: true,
})
export class CssSupportDirective {
  supportedCSS = signal(false);

  @HostBinding('class') get hostClass() {
    return {
      'supportCSS': this.supportedCSS() === true,
    }
  }

  constructor() {
    effect(() => {
      const isSupported = CSS.supports('animation-timeline', 'scroll()');
      if (isSupported) {
        this.supportedCSS.set(true);
      }
    }, { allowSignalWrites: true });
  }
}
