import { Routes } from '@angular/router';
import { authGuard } from '@core/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        canActivate: [authGuard],
        loadComponent: () => import('./PAGES/dashboard/dashboard.component').then(m => m.DashboardComponent)
    },

    //MARK: AUTHENTICATION
    {
        path: 'login',
        loadComponent: () => import('./PAGES/authentication/login/login.component').then(m => m.LoginComponent)
    },

    {
        path: '**',
        loadComponent: () => import('./PAGES/authentication/page404/page404.component').then(m => m.Page404Component)
    }
];
