import {selectedPage} from './selectedPage';
import {setCurrentPageAction} from '../../actions/navigation/navigation.actions';

describe('Pages reducer', () => {

    it('Right initial state', () => {
        expect(selectedPage()).toEqual(null);
    });

    it('SetPagesData action', () => {
        expect(selectedPage(undefined, setCurrentPageAction("test-page-id")))
            .toEqual("test-page-id");
    });
});
