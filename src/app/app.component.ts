import { Component, OnInit } from '@angular/core';
import { Link } from './shared/link';
import { Store } from '@ngrx/store';

import * as fromRoot from './app.reducers';
import * as UI from './shared/ui.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  links: Link[] = [
    { name: 'Start', href: "#" },
    { name: 'Timer', href: "#" },
    { name: 'About', href: "#" }
  ];

  constructor(private store: Store<fromRoot.State>) { }
  
  /* Test the reducer */
  ngOnInit() {
    this.store.dispatch(new UI.StartLoading());

    setTimeout( () => {
      this.store.dispatch(new UI.StopLoading());
    }, 3000);
  }

}
