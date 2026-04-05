import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
	selector: 'app-home',
	imports: [
		MatIcon,
		FaIconComponent,
	],
	templateUrl: './home.html',
	styleUrl: './home.scss',
	standalone: true
})
export class Home {

}
