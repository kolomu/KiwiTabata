import { Action } from '@ngrx/store';

export enum ActionTypes {
    StartLoading = '[UI] Start Loading',
    StopLoading = '[UI] Stop Loading'
};

export class StartLoading implements Action {
    readonly type = ActionTypes.StartLoading;
}

export class StopLoading implements Action {
    readonly type = ActionTypes.StopLoading;
}

/* This type exports classes which can be created via constructor */
export type UIActions = StartLoading | StopLoading;