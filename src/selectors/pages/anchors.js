import {createSelector} from 'reselect';
import {pageByPageIdSelector} from './pages';
import {anchorIdPropSelector} from './props';

export const anchorsSelector = state => state.pages.anchors;

export const anchorsByPageIdSelector = createSelector(
    pageByPageIdSelector,
    anchorsSelector,
    (page, anchors) => {
        if (!page.anchors) {
            return [];
        }

        return page.anchors.map(anchorId => anchors[anchorId]);
    }
);

export const anchorByAnchorIdSelector = createSelector(
    anchorIdPropSelector,
    anchorsSelector,
    (anchorId, anchors) => {
        return anchors[anchorId];
    }
);
