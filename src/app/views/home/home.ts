import { Component } from '@angular/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
	selector: 'app-home',
	imports: [
		FaIconComponent
	],
	templateUrl: './home.html',
	styleUrl: './home.scss',
	standalone: true
})
export class Home {

}
