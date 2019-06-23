import {combineReducers} from 'redux';

import {selectedPage} from './selectedPage';
import {searchInput} from './searchInput';

export const navigationReducer = combineReducers({
    selectedPage,
    searchInput
});
