import {setCurrentPageAction} from './navigation.actions';

describe('Navigation actions', () => {

    it('setCurrentPageAction contains right payload', () => {
        expect(setCurrentPageAction("test-page-id"))
            .toEqual(expect.objectContaining({payload: {pageId: "test-page-id"}}));
    });
});
