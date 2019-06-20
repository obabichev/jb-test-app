import {loading} from './loading';
import {finishLoadingAction, startLoadingAction} from '../actions/loading/loading.actions';

describe('Pages reducer', () => {

    it('Right initial state', () => {
        expect(loading()).toEqual({});
    });

    it('Set new loader', () => {
        expect(loading(undefined, startLoadingAction("test-loader-id")))
            .toEqual({"test-loader-id": true});
    });

    it('Stop loader', () => {
        expect(loading(undefined, finishLoadingAction("test-loader-id")))
            .toEqual({"test-loader-id": false});
    });
});
