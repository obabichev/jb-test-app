import {topLevelIds} from './topLevelIds';
import {TEST_PAGES_DATA} from '../../tests/pages/testPagesData';
import {setPagesDataAction} from '../../actions/pages/pages.actions';

describe('TopLevelIds reducer', () => {

    it('Right initial state', () => {
        expect(topLevelIds()).toEqual([]);
    });

    it('SetPagesData action', () => {
        expect(topLevelIds(undefined, setPagesDataAction(TEST_PAGES_DATA)))
            .toEqual(TEST_PAGES_DATA.topLevelIds);
    });

});
