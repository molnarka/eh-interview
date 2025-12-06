import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NAVIGATION_ROUTES, NavigationRoute } from './app.routes';

/**
 * HeaderComponent provides navigation links for all main app routes, enforcing strict typing and DRY principle.
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  readonly NAVIGATION_ITEMS: ReadonlyArray<NavigationRoute> = NAVIGATION_ROUTES;
}
