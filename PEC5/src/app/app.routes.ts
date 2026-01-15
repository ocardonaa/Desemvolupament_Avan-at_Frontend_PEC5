import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

export const routes: Routes = [
    { path: 'statistics', loadChildren: () => import('./stadistics/stadistics.module').then(m => m.StadisticsModule) },
    { path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule) },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: '', component: HomeComponent },
];   
