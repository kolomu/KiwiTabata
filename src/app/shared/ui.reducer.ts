import {
    UIActions, /* Is an exported type which contains classes */
    START_LOADING, /* is an exported string constant */
    STOP_LOADING
} from './ui.actions';

/* This state is loaded in App Reducer & createFeatureSelector */
export interface State {
    isLoading: boolean;
}

const initialState: State = {
  isLoading: false
};

/* Actual reducer which modifies the state */
export function uiReducer(state=initialState, action: UIActions) {
    console.log(action.type);
    switch(action.type){
        case START_LOADING: {
            return { isLoading: true };
        }
        case STOP_LOADING: {
            return { isLoading: false };
        }
    }
    return state;
}

/* get a value from this state object (see app.reducer -> createSelector) */
export const getIsLoading = (state: State) => state.isLoading;