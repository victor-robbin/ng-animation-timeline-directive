import { ChangeDetectorRef, Component, computed, inject, ViewChild } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { CssSupportDirective } from './directives/css-support.directive';
import { ScrollClassDirective } from './directives/scroll-class.directive';
import { CssSupportService } from './services/css-support.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    ContentComponent,
    CssSupportDirective,
    ScrollClassDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-animation-timeline-directive';

  cssSupportSvc = inject(CssSupportService);
  supportedCSS = this.cssSupportSvc.supportedCSS;
}
