import { Component, output } from '@angular/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
	selector: 'app-header',
	imports: [
		FaIconComponent
	],
	templateUrl: './header.html',
	styleUrl: './header.scss',
	standalone: true
})
export class Header {
	toggleSidebar = output<void>();
}
