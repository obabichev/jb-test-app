import {createSelector} from 'reselect';
import {pagesSelector} from '../pages/pages';
import {anchorIdPropSelector, pageIdPropSelector} from '../pages/props';

export const selectedMenuItemSelector = (state) => state.navigation.selectedPage.pageId;

export const selectedAnchorSelector = (state) => state.navigation.selectedPage.anchorId;

export const searchInputSelector = (state) => state.navigation.searchInput;

export const menuItemByPageIdSelector = createSelector(
    pageIdPropSelector,
    pagesSelector,
    (pageId, pages) => {
        const page = pages[pageId];

        const {id, title, url} = page;

        return {id, title, url};
    }
);

export const urlPropSelector = (_, props) => props.url;

export const pageIdByUrlSelector = createSelector(
    urlPropSelector,
    pagesSelector,
    (url, pages) => {
        if (!url) {
            return null;
        }

        for (const key of Object.keys(pages)) {
            const page = pages[key];
            if (page.url === url) {
                return page.id;
            }
        }
        return null;
    }
);

export const isAnchorSelectedSelector = createSelector(
    anchorIdPropSelector,
    selectedAnchorSelector,
    (anchorId, selectedAnchorId) => {
        return anchorId === selectedAnchorId;
    }
);
