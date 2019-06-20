import {
    startLoadingAction,
    finishLoadingAction,
    finishNavigationLoadingAction,
    startNavigationLoadingAction
} from './loading.actions';
import {NAVIGATION_LOADER} from './loaders';

describe('Navigation actions', () => {

    it('startLoadingAction contains right payload', () => {
        expect(startLoadingAction(NAVIGATION_LOADER))
            .toEqual(expect.objectContaining({payload: {loaderId: NAVIGATION_LOADER}}));
    });

    it('finishLoadingAction contains right payload', () => {
        expect(finishLoadingAction(NAVIGATION_LOADER))
            .toEqual(expect.objectContaining({payload: {loaderId: NAVIGATION_LOADER}}));
    });

    it('startNavigationLoadingAction contains right payload', () => {
        expect(startNavigationLoadingAction())
            .toEqual(expect.objectContaining({payload: {loaderId: NAVIGATION_LOADER}}));
    });

    it('finishNavigationLoadingAction contains right payload', () => {
        expect(finishNavigationLoadingAction())
            .toEqual(expect.objectContaining({payload: {loaderId: NAVIGATION_LOADER}}));
    });
});
