import {createSelector} from 'reselect';
import {pageIdPropSelector} from './props';

export const pagesSelector = (state) => {
    return state.pages.pages;
};

export const topLevelIdsSelector = (state) => {
    return state.pages.topLevelIds;
};

export const pageByPageIdSelector = createSelector(
    pagesSelector,
    pageIdPropSelector,
    (pages, pageId) => {
        return pages[pageId];
    }
);