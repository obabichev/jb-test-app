import {setPagesDataAction} from './pages.actions';
import {SET_PAGES_DATA_ACTION} from './pages.constants';

describe('Pages actions', () => {

    it('setPagesDataAction contains right constant', () => {
        expect(setPagesDataAction(undefined))
            .toEqual(expect.objectContaining({type: SET_PAGES_DATA_ACTION}));
    });

    it('setPagesDataAction contains right payload', () => {
        const payload = {test: 'test'};

        expect(setPagesDataAction(payload))
            .toEqual(expect.objectContaining({payload}));
    });
});
