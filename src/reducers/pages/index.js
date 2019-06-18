import {combineReducers} from 'redux';

import {pages} from './pages';
import {anchors} from './anchors';
import {topLevelIds} from './topLevelIds';

export const pagesReducer = combineReducers({
    pages,
    anchors,
    topLevelIds
});
