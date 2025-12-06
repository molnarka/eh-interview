// Angular Router
import { Route } from '@angular/router';

// Feature Components
import { SolidSampleComponent } from './solid-sample/solid-sample.component';
import { SignalSampleComponent } from './signal-sample/signal-sample.component';
import { FacadeSampleComponent } from './facade-sample/facade-sample.component';
import { WsChatRxjsComponent } from './ws-chat-rxjs/ws-chat-rxjs.component';
import { PageNotFoundComponent } from '@angular-advanced-sample/page-not-found';

// NgRx Store & Effects
import { provideState } from '@ngrx/store';
import * as fromUsers from '@angular-advanced-sample/users/store';
import { provideEffects } from '@ngrx/effects';
import { UsersEffects } from 'libs/users/store/src/lib/state/users.effects';

// Interface for navigation links used in the app header/sidebar
// Route path constants
export const ROUTE_PATH_FACADE = 'facade';
export const ROUTE_PATH_SOLID = 'solid';
export const ROUTE_PATH_SIGNAL = 'signal';
export const ROUTE_PATH_CHAT = 'chat';

export interface NavigationRoute {
  readonly path: string;
  readonly label: string;
}

export const NAVIGATION_ROUTES: ReadonlyArray<NavigationRoute> = [
  { path: `/${ROUTE_PATH_FACADE}`, label: 'Facade Sample' },
  { path: `/${ROUTE_PATH_SOLID}`, label: 'Solid Sample' },
  { path: `/${ROUTE_PATH_SIGNAL}`, label: 'Signal Sample' },
  { path: `/${ROUTE_PATH_CHAT}`, label: 'Chat (RxJS)' },
];

// Application route definitions
export const appRoutes: Route[] = [
  {
    path: ROUTE_PATH_SOLID,
    component: SolidSampleComponent,
  },
  {
    path: ROUTE_PATH_SIGNAL,
    component: SignalSampleComponent,
  },
  {
    path: ROUTE_PATH_FACADE,
    component: FacadeSampleComponent,
    providers: [
      provideState('users', fromUsers.usersReducer),
      provideEffects(UsersEffects),
    ],
  },
  {
    path: ROUTE_PATH_CHAT,
    component: WsChatRxjsComponent,
  },
  {
    path: '',
    redirectTo: `/${ROUTE_PATH_FACADE}`,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
