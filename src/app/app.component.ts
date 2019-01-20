import { Component } from '@angular/core';
import { Link } from './shared/link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links: Link[] = [
    { name: 'Start', href: "#" },
    { name: 'Timer', href: "#" },
    { name: 'About', href: "#" }
  ];
}
