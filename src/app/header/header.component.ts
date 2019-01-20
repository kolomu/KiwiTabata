import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Link } from '../shared/link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() links: Link[] = [];
  @Output() openSidenav = new EventEmitter<boolean>();

  constructor() { }
  ngOnInit() { }

  onOpenSidenav() {
    this.openSidenav.next(true);
  }
}
