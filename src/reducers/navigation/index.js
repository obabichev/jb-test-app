import {combineReducers} from 'redux';

import {selectedPage} from './selectedPage';

export const navigationReducer = combineReducers({
    selectedPage
});
