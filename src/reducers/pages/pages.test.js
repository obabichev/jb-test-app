import {pages} from './pages';
import {TEST_PAGES_DATA} from '../../tests/pages/testPagesData';
import {setPagesData} from '../../actions/pages/pages.actions';

describe('Pages reducer', () => {

    it('Right initial state', () => {
        expect(pages()).toEqual([]);
    });

    it('SetPagesData action', () => {
        expect(pages(undefined, setPagesData(TEST_PAGES_DATA)))
            .toEqual(TEST_PAGES_DATA.pages);
    });
});
