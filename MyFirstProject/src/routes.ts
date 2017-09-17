import {Route} from '@angular/router';
import {LoginComponent} from './app/login';
import {VideoComponent} from './app/components/videos';
import {NotFoundComponent} from './app/components/not-found';
import {AuthGuard} from './app/guards/auth-guard';
import {DashboardComponent} from './app/components/dashboard';
import {AccountsComponent} from './app/components/accounts';


export const routes: Route[] = [
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  {
    path: '', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      {path: '', component: VideoComponent},
      {path: 'accounts', component: AccountsComponent}
    ]
  },
  {path: '**', component: NotFoundComponent}
];


// studio.invidz.com
