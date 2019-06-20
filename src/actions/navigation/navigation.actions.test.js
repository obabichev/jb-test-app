import {setCurrentAnchorAction, setCurrentPageAction} from './navigation.actions';

describe('Navigation actions', () => {

    it('setCurrentPageAction contains right payload', () => {
        expect(setCurrentPageAction("test-page-id"))
            .toEqual(expect.objectContaining({payload: {pageId: "test-page-id"}}));
    });

    it('setCurrentAnchorAction contains right payload', () => {
        expect(setCurrentAnchorAction("test-anchor-id"))
            .toEqual(expect.objectContaining({payload: {anchorId: "test-anchor-id"}}));
    });
});
