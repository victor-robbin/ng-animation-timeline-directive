import { Directive, effect, HostBinding, inject, signal } from '@angular/core';
import { CssSupportService } from '../services/css-support.service';

@Directive({
  selector: '[appCssSupport]',
  standalone: true,
})
export class CssSupportDirective {
  CssSupportSvc = inject(CssSupportService);

  supportedCSS = this.CssSupportSvc.supportedCSS;

  @HostBinding('class') get hostClass() {
    return {
      'supportCSS': this.supportedCSS() === true,
    }
  }
}
