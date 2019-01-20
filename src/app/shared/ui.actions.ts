import { Action } from '@ngrx/store';

/* Use constant to prevent mistyping */
export const START_LOADING = '[UI] Start Loading';
export const STOP_LOADING = '[UI] Stop Loading';

export class StartLoading implements Action {
    readonly type = START_LOADING;
}

export class StopLoading implements Action {
    readonly type = STOP_LOADING;
}

/* This type exports classes which can be created via constructor */
export type UIActions = StartLoading | StopLoading;