import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { CssSupportDirective } from '../../directives/css-support.directive';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    BannerComponent,
    CssSupportDirective,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent { }
