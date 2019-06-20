import {TEST_PAGES_DATA} from '../../tests/pages/testPagesData';
import {pageByPageIdSelector, pagesSelector, topLevelIdsSelector} from './pages';

const state = {
    pages: {
        ...TEST_PAGES_DATA
    }
};

describe('Pages selectors', () => {

    it('pagesSelector return correct data', () => {
        expect(pagesSelector(state))
            .toEqual(TEST_PAGES_DATA.pages);
    });

    it('topLevelIdsSelector return correct data', () => {
        expect(topLevelIdsSelector(state))
            .toEqual(TEST_PAGES_DATA.topLevelIds);
    });

    it('pageByPageIdSelector', () => {
        const props = {pageId: "p2"};
        expect(pageByPageIdSelector(state, props))
            .toEqual({id: "p2"});
    });
});
