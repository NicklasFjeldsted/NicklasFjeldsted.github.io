import { Component, input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  standalone: true,
  host: {
    '[class.open]': 'isOpen()',
  },
})
export class Sidebar {
  isOpen = input<boolean>(false);
}
