import {pages} from './pages';
import {TEST_PAGES_DATA} from '../../tests/pages/testPagesData';
import {setPagesDataAction} from '../../actions/pages/pages.actions';

describe('Pages reducer', () => {

    it('Right initial state', () => {
        expect(pages()).toEqual({});
    });

    it('SetPagesData action', () => {
        expect(pages(undefined, setPagesDataAction(TEST_PAGES_DATA)))
            .toEqual(TEST_PAGES_DATA.pages);
    });
});
