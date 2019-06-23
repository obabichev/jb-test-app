import {searchInput} from './searchInput';
import {setSearchInputAction} from '../../actions/navigation/navigation.actions';

describe('searchInput reducer', () => {
    it('Right initial state', () => {
        expect(searchInput()).toEqual('');
    });

    it('correct state after setSearchInputAction', () => {
        expect(searchInput(undefined, setSearchInputAction('test-input')))
            .toEqual('test-input');
    });
});
