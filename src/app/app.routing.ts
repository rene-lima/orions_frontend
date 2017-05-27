import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component'
import {QuemSomosComponent} from './quem-somos/quem-somos.component'

const appRoutes: Routes = [
    {
        path:'',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'quem-somos',
        component: QuemSomosComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);