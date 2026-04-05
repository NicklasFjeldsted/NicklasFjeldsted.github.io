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
import {Sidebar} from './shared/sidebar/sidebar';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule, Footer, Header, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
	standalone: true

})
export class App {
  protected readonly title = signal('murerfirmaet-mvo');
  sidebarOpen = signal(false);

  toggleSidebar() {
    this.sidebarOpen.update(open => !open);
  }

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer)
  {
	  const resolver: IconResolver = (name) =>
		  sanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/${name}.svg`);
	  iconRegistry.addSvgIconResolver(resolver);  }
}
