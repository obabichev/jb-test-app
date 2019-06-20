import {isNavigationLoading} from './loading';
import {NAVIGATION_LOADER} from '../../actions/loading/loaders';

describe('Loading selectors', () => {

    it('isNavigationLoading in true case', () => {
        const state = {loading: {[NAVIGATION_LOADER]: true}};

        expect(isNavigationLoading(state))
            .toEqual(true);
    });

    it('isNavigationLoading in false case', () => {
        const state = {loading: {[NAVIGATION_LOADER]: false}};

        expect(isNavigationLoading(state))
            .toEqual(false);
    });

});
