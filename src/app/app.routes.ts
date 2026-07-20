import { Routes } from '@angular/router';
import { authGuard } from '@core/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: '',
        canActivate: [authGuard],
        loadComponent: () => import('./shared/layout/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./PAGES/dashboard/dashboard.component').then(m => m.DashboardComponent)
            },
            {
                path: 'daftar-kontak',
                loadComponent: () => import('./PAGES/daftar-kontak/daftar-kontak.component').then(m => m.DaftarKontakComponent)
            },
        ]
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
