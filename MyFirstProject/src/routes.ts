import {Route} from '@angular/router';
import {LoginComponent} from './app/login';
import {VideosComponent} from './app/components/videos';
import {NotFoundComponent} from './app/components/not-found';
import {AuthGuard} from './app/guards/auth-guard';
import {DashboardComponent} from './app/components/dashboard';
import {AccountsComponent} from './app/components/accounts';
import {SingleVideoComponent} from './app/components/single-video';
import {AnonGuard} from './app/guards/anon-guard';


















export const routes: Route[] = [
  {path: 'login', component: LoginComponent, canActivate: [AnonGuard]},
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      {path: 'videos', component: VideosComponent},
      {path: 'videos/:videoId', component: SingleVideoComponent},
      {path: 'accounts', component: AccountsComponent}
    ]
  },
  {path: '**', component: NotFoundComponent}
];


// studio.invidz.com
