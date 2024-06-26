 
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
 

export const routes: Routes = [  
     { path: 'home', component: HomeComponent },
    {
        path: 'auth', loadChildren: () => import('./auth/auth.module')
            .then(m => m.AuthModule)
    }, 
    { path: '', redirectTo: '/auth', pathMatch: 'full' }

];
