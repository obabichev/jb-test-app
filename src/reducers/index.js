import {combineReducers} from 'redux';

import {pagesReducer} from './pages';
import {navigationReducer} from './navigation';

export const rootReducer = combineReducers({
    pages: pagesReducer,
    navigation: navigationReducer
});
