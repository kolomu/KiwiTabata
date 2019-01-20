import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Link } from '../../shared/link';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() links: Link[] = [];
  @Output() closeSidenav = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

}
