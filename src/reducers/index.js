import {combineReducers} from 'redux';

import {pagesReducer} from './pages';
import {navigationReducer} from './navigation';
import {loading} from './loading';

export const rootReducer = combineReducers({
    pages: pagesReducer,
    navigation: navigationReducer,
    loading
});
