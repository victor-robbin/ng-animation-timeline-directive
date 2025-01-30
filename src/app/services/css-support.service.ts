import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CssSupportService {
  supportedCSS = signal(false);

  constructor() {
    effect(() => {
      const isSupported = CSS.supports('animation-timeline', 'scroll()');
      if (isSupported) {
        this.supportedCSS.set(true);
      }
    }, { allowSignalWrites: true });
  }

}
