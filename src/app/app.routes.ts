import { Routes } from '@angular/router';
import { Home } from './pages/home/home/home';
import { Register } from './pages/register/register/register';
import { Login } from './pages/login/login/login';

export const routes: Routes = [
    {path: "", component: Register},
    {path: "login", component: Login},
    {path: "home", component: Home}
];
