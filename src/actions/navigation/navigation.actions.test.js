import {setCurrentAnchorAction, setCurrentPageAction, setSearchInputAction} from './navigation.actions';

describe('Navigation actions', () => {

    it('setCurrentPageAction contains right payload', () => {
        expect(setCurrentPageAction("test-page-id"))
            .toEqual(expect.objectContaining({payload: {pageId: "test-page-id"}}));
    });

    it('setCurrentAnchorAction contains right payload', () => {
        expect(setCurrentAnchorAction("test-anchor-id"))
            .toEqual(expect.objectContaining({payload: {anchorId: "test-anchor-id"}}));
    });

    it('setSearchInputAction contains right payload', () => {
        expect(setSearchInputAction("test-search-string"))
            .toEqual(expect.objectContaining({payload: {searchInput: "test-search-string"}}));
    });
});
