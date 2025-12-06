import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SolidSampleComponent } from './solid-sample/solid-sample.component';
import { HeaderComponent } from './header.component';

@Component({
  standalone: true,
  imports: [RouterModule, SolidSampleComponent, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  static readonly APP_TITLE: string = 'Angular Advanced Sample';
  readonly title = AppComponent.APP_TITLE;
}
