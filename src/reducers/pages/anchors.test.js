import {anchors} from './anchors';
import {TEST_PAGES_DATA} from '../../tests/pages/testPagesData';
import {setPagesData} from '../../actions/pages/pages.actions';

describe('Anchors reducer', () => {

    it('Right initial state', () => {
        expect(anchors()).toEqual([]);
    });

    it('SetPagesData action', () => {
        expect(anchors(undefined, setPagesData(TEST_PAGES_DATA)))
            .toEqual(TEST_PAGES_DATA.anchors);
    });

});
