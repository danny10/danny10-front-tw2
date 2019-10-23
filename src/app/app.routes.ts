
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VistaComponent } from './logueado/vista/vista.component';
import { TweetComponent } from './logueado/tweet/tweet.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'vista', component: VistaComponent },
  { path: 'tweet/:name', component: TweetComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
