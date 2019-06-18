import {setPagesData} from './pages.actions';
import {SET_PAGES_DATA_ACTION} from './pages.constants';

describe('Pages actions', () => {

    it('Contains right constant', () => {
        expect(setPagesData(undefined))
            .toEqual(expect.objectContaining({type: SET_PAGES_DATA_ACTION}));
    });

    it('Contains right payload', () => {
        const payload = {test: 'test'};

        expect(setPagesData(payload))
            .toEqual(expect.objectContaining({payload}));
    });
});
