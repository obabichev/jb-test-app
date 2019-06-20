import {selectedPage} from './selectedPage';
import {setCurrentAnchorAction, setCurrentPageAction} from '../../actions/navigation/navigation.actions';

describe('Pages reducer', () => {

    it('Right initial state', () => {
        expect(selectedPage()).toEqual({pageId: null, anchorId: null});
    });

    it('SetPagesData action', () => {
        expect(selectedPage(undefined, setCurrentPageAction("test-page-id")))
            .toEqual({pageId: "test-page-id", anchorId: null});
    });

    it('SetPagesData action, anchorId is null after new pageID', () => {
        const state = {
            pageId: "old-page",
            anchorId: "old-anchor"
        };

        expect(selectedPage(state, setCurrentPageAction("test-page-id")))
            .toEqual({pageId: "test-page-id", anchorId: null});
    });

    it('setCurrentAnchorAction action', () => {
        const state = {pageId: "test-page-id"};

        expect(selectedPage(state, setCurrentAnchorAction("test-anchor-id")))
            .toEqual({pageId: "test-page-id", anchorId: "test-anchor-id"});
    });
});
