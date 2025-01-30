import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { CssSupportDirective } from '../../directives/css-support.directive';
import { CssSupportService } from '../../services/css-support.service';
import { VisibilityClassDirective } from '../../directives/visibility-class.directive';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    BannerComponent,
    CssSupportDirective,
    VisibilityClassDirective,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent {
  cssSupportSvc = inject(CssSupportService);
  supportedCSS = this.cssSupportSvc.supportedCSS;
}
