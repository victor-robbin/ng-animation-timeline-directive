import { ChangeDetectionStrategy, Component, HostBinding, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ParallaxDirective } from '../../directives/parallax.directive';
import { CssSupportService } from '../../services/css-support.service';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    ParallaxDirective,
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent {
  cssSupportSvc = inject(CssSupportService);
  supportedCSS = this.cssSupportSvc.supportedCSS;

  @HostBinding('class') get hostClass() {
    return {
      'parallax': !this.supportedCSS(),
    }
  }
}
