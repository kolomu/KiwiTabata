import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() openSidenav = new EventEmitter<boolean>();

  constructor() { }
  ngOnInit() { }

  onOpenSidenav() {
    this.openSidenav.next(true);
  }
}
