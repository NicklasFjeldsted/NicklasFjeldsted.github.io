import { Routes } from '@angular/router';
import {Home} from './views/home/home';
import {Shop} from './views/shop/shop';
import {Contact} from './views/contact/contact';

export const routes: Routes = [
	{ path: '', component: Home },
	{ path: 'kontakt', component: Contact },
	{ path: '**', component: Home },
];
