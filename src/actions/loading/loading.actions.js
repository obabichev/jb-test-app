import {FINISH_LOADING_ACTION, START_LOADING_ACTION} from './loading.constants';
import {NAVIGATION_LOADER} from './loaders';

export const startLoadingAction = (loaderId) => ({
    type: START_LOADING_ACTION,
    payload: {loaderId}
});

export const finishLoadingAction = (loaderId) => ({
    type: FINISH_LOADING_ACTION,
    payload: {loaderId}
});

export const startNavigationLoadingAction = () => startLoadingAction(NAVIGATION_LOADER);

export const finishNavigationLoadingAction = () => finishLoadingAction(NAVIGATION_LOADER);