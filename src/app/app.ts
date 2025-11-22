import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {
	IconResolver,
	MatIconModule,
	MatIconRegistry,
} from "@angular/material/icon";
import {Footer} from './shared/footer/footer';
import {Header} from './shared/header/header';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule, Footer, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
	standalone: true

})
export class App {
  protected readonly title = signal('murerfirmaet-mvo');

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer)
  {
	  const resolver: IconResolver = (name) =>
		  sanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/${name}.svg`);
	  iconRegistry.addSvgIconResolver(resolver);  }
}
