import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from './app.reducers';
import * as UI from './shared/ui.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoading$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) { }
  
  /* Test the reducer */
  ngOnInit() {
    this.store.dispatch(new UI.StartLoading());

    this.isLoading$ = this.store.select(fromRoot.getIsLoading);

    setTimeout( () => {
      this.store.dispatch(new UI.StopLoading());
    }, 3000);
  }

}
