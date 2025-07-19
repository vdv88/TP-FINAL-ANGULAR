import { Routes } from '@angular/router';
import { Chat } from './chat/chat';
import { Home } from './home/home';
import { Posts } from './posts/posts';
import { Products } from './products/products';
import { ProductDetail } from './product/product';
import { Contact } from './contact/contact';

const LoginRedirect = () => import('./login-redirect').then(m => m.LoginRedirect);

export const routes: Routes = [
    {
        path: 'chat',
        component: Chat
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'posts',
        component: Posts
    },
    {
        path: 'products',
        component: Products
    },
    {
        path: 'products/:id',
        component: ProductDetail
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: 'login',
        loadComponent: LoginRedirect
    },
    {
        path: '**',
        component: Home
    }
];
