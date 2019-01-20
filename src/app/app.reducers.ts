import { 
    ActionReducerMap, /* To merge all eagerly loaded Reducers */
    createFeatureSelector, /* To get a slice of the AppState */
    createSelector /* Utility Function to create Selectors */
} from '@ngrx/store';

import * as fromUi from './shared/ui.reducer';

/* Components & Services use this state for store DI */
export interface State {
    ui: fromUi.State
}

/* Merge all reducers into one */
export const reducers: ActionReducerMap<State> = {
    ui: fromUi.uiReducer
}

/* Get only the UI-State */
export const getUiState = createFeatureSelector<fromUi.State>('ui');

/* Selector which is used in Components to get a specific value */
/* usage via: this.store.select(fromRoot.getIsLoading): Observable<boolean> */
export const getIsLoading = createSelector(getUiState, fromUi.getIsLoading);